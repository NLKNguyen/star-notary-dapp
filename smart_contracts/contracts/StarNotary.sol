pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

contract StarNotary is ERC721 { 
     
    struct Star {
        string name;
        string story;
        string ra;
        string dec;
        string mag;
    }

    mapping(string => uint256) starToToken;
    mapping(uint256 => Star) public tokenIdToStarInfo; 
    mapping(uint256 => uint256) public starsForSale;
    
    event OwnStar(address ownerAddr, string starId);
    event StarOnSale(uint256 tokenId, uint256 price);

    function createStar(string _name, string _story, string _ra, string _dec, string _mag, uint256 _tokenId) public  {         
        // string memory starId = keccak256(abi.encodePacked(_ra, _dec, _mag));        
        string memory starId = strConcat(_ra, _dec, _mag);
        require(starToToken[starId] == 0, "Star needs to be unregistered");

        Star memory newStar = Star(_name, _story, _ra, _dec, _mag);
                
        tokenIdToStarInfo[_tokenId] = newStar;
        starToToken[starId] = _tokenId;

        super._mint(msg.sender, _tokenId);
        emit OwnStar(this.ownerOf(_tokenId), starId);
    }

    function putStarUpForSale(uint256 _tokenId, uint256 _price) public { 
        require(this.ownerOf(_tokenId) == msg.sender, "Only Star owner can sell");

        starsForSale[_tokenId] = _price;
        emit StarOnSale(_tokenId,  _price);
    }

    function buyStar(uint256 _tokenId) public payable { 
        require(starsForSale[_tokenId] > 0, "Not for sale");
        
        uint256 starCost = starsForSale[_tokenId];
        address starOwner = this.ownerOf(_tokenId);
        require(msg.value >= starCost, "Insufficient balance");

        _removeTokenFrom(starOwner, _tokenId);
        _addTokenTo(msg.sender, _tokenId);
        
        starOwner.transfer(starCost);

        if(msg.value > starCost) { 
            msg.sender.transfer(msg.value - starCost);
        }
    }

    function strConcat(string _a, string _b, string _c) internal pure returns (string){
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        bytes memory _bc = bytes(_c);
        string memory abc = new string(_ba.length + _bb.length + _bc.length);
        bytes memory babc = bytes(abc);
        uint k = 0;
        uint i = 0;
        for (i = 0; i < _ba.length; i++) babc[k++] = _ba[i];
        for (i = 0; i < _bb.length; i++) babc[k++] = _bb[i];
        for (i = 0; i < _bc.length; i++) babc[k++] = _bc[i];
        return string(babc);
    }
    
}
