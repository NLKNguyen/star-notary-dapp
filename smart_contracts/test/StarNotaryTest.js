const StarNotary = artifacts.require('StarNotary')

contract('StarNotary', accounts => { 

    let user1 = accounts[1]
    let user2 = accounts[2]
    let randomMaliciousUser = accounts[3]    

    let name = 'awesome star!'
    let starStory = "this star was bought for my wife's birthday"
    let ra = "1"
    let dec = "1"
    let mag = "1"
    let starId = 1

    beforeEach(async function() { 
        this.contract = await StarNotary.new({from: accounts[0]})
    })

    describe('can create a star', () => { 
        it('can create a star and get its name', async function () { 
            await this.contract.createStar(name, starStory, ra, dec, mag, starId, {from: user1})
            let starInfo = await this.contract.tokenIdToStarInfo(starId)
            assert.equal(starInfo[0], name)
        })
    })

    describe('star uniqueness', () => {
        it('only unique stars can be minted', async function() { 
            // first we mint our first star            
            await this.contract.createStar(name, starStory, ra, dec, mag, starId, {from: user1})
            // then we try to mint the same star, and we expect an error
            await expectThrow(this.contract.createStar(name, starStory, ra, dec, mag, starId, {from: user1}))
        })

        it('only unique stars can be minted even if their ID is different', async function() { 
            // first we mint our first star
            await this.contract.createStar(name, starStory, ra, dec, mag, starId, {from: user1})
            // then we try to mint the same star, and we expect an error
            await expectThrow(this.contract.createStar(name, starStory, ra, dec, mag, starId + 1, {from: user1}))
        })

        it('minting unique stars does not fail', async function() { 
            for(let i = 0; i < 10; i ++) { 
                let id = i
                let newRa = i.toString()
                let newDec = i.toString()
                let newMag = i.toString()

                await this.contract.createStar(name, starStory, newRa, newDec, newMag, id, {from: user1})

                let starInfo = await this.contract.tokenIdToStarInfo(id)
                assert.equal(starInfo[0], name)
            }
        })
    })

    describe('buying and selling stars', () => { 

        let starPrice = web3.toWei(.01, "ether")

        beforeEach(async function () { 
            await this.contract.createStar(name, starStory, ra, dec, mag, starId, {from: user1})
        })

        it('user1 can put up their star for sale', async function () { 
            assert.equal(await this.contract.ownerOf(starId), user1)
            await this.contract.putStarUpForSale(starId, starPrice, {from: user1})
            
            assert.equal(await this.contract.starsForSale(starId), starPrice)
        })

        describe('user2 can buy a star that was put up for sale', () => { 
            beforeEach(async function () { 
                await this.contract.putStarUpForSale(starId, starPrice, {from: user1})
            })

            it('user2 is the owner of the star after they buy it', async function() { 
                await this.contract.buyStar(starId, {from: user2, value: starPrice, gasPrice: 0})
                assert.equal(await this.contract.ownerOf(starId), user2)
            })

            it('user2 ether balance changed correctly', async function () { 
                const highBalance = web3.toWei(1, 'ether')
                const balanceBefore = web3.eth.getBalance(user2)

                await this.contract.buyStar(starId, {from: user2, value: highBalance, gasPrice: 0})
                const balanceAfter = web3.eth.getBalance(user2)

                assert.equal(balanceBefore.sub(balanceAfter), starPrice)
            })
        })
    })
})

var expectThrow = async function(promise) { 
    try { 
        await promise
    } catch (error) { 
        assert.exists(error)
        return 
    }

    assert.fail('expected an error, but none was found')
}
