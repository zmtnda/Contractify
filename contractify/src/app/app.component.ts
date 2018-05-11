import { Component } from '@angular/core';
import { ContractsService } from './contracts.service'
import Web3 from 'web3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public balance: number;

  constructor() {
    let web3;
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        
    }
    web3.eth.defaultAccount = web3.eth.accounts[0];
    let params = {
      gas: 40000,
      from:''
    };

    var CoursetroContract = web3.eth.contract([
    {
      "constant": false,
      "inputs": [
        {
          "name": "totalNumberOfDays",
          "type": "uint256"
        }
      ],
      "name": "checkAttendance",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "numberWinner",
          "type": "address[100]"
        }
      ],
      "name": "distributePrizes",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "kill",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "attendance",
          "type": "uint256"
        }
      ],
      "name": "updateStudentAttendance",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "targetPercentage",
          "type": "uint256"
        },
        {
          "name": "payout",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "player",
          "type": "address"
        }
      ],
      "name": "checkStudentExists",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "payoutAmount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "percentForPayout",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "showStudents",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "studentInfo",
      "outputs": [
        {
          "name": "totalNumberOfAttendance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "students",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "studentsLength",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]);
    var Coursetro = CoursetroContract.at('0xed75c636cf58d0d803105b0e31a2291542d7910f');
    console.log(Coursetro);
    //for(let i =1 ; i < web3.eth.accounts.length; i++){
      web3.eth.defaultAccount=web3.eth.accounts[2]
      Coursetro.updateStudentAttendance(1, {
        gas: 300000,
        from: web3.eth.accounts[0],
        value: web3.toWei(0, 'ether')
     }, (err, result) => {
      Coursetro.checkAttendance(1, {
        gas: 300000,
        from: web3.eth.accounts[0],
        value: web3.toWei(100000000, 'ether')
      },(err,result)=>{
        console.log('test',result)
      }
     )
    
      
    })
    web3.eth.defaultAccount = web3.eth.accounts[2];
    //console.log('test',web3.eth.defaultAccount);
    console.log('wallet amount',web3.eth.getBalance(web3.eth.coinbase));
  
  }



}
