import web3 from './web3';

export const contractAddress = '0xa2aC18f4d5CdFeAd40A27E96a9E0306106Bf8984';
const contractABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "getHospitalsCount",
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
		"inputs": [
			{
				"name": "nationalIDI",
				"type": "uint256"
			}
		],
		"name": "getMedicalRecord",
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
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "pharmacyAddresses",
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
		"constant": false,
		"inputs": [
			{
				"name": "pharmacyAddressI",
				"type": "address"
			},
			{
				"name": "pharmacyName",
				"type": "string"
			}
		],
		"name": "addPharmacy",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "hospitalAddressI",
				"type": "address"
			},
			{
				"name": "hospitalName",
				"type": "string"
			}
		],
		"name": "addHospital",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "nationalIDI",
				"type": "uint256"
			}
		],
		"name": "checkMedicalRecord",
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
		"constant": false,
		"inputs": [
			{
				"name": "nationalID",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "dateI",
				"type": "string"
			},
			{
				"name": "phoneNumberI",
				"type": "string"
			},
			{
				"name": "genderI",
				"type": "string"
			},
			{
				"name": "bloodTypeI",
				"type": "string"
			},
			{
				"name": "emergencyContantI",
				"type": "string"
			}
		],
		"name": "createMedicalRecord",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
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
		"name": "medicalRecords",
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
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "hospitals",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "networkAddress",
				"type": "address"
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
		"name": "pharmacies",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "networkAddress",
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
		"name": "ministryOfHealth",
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
		"name": "getPharmaciesCount",
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
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "hospitalAddresses",
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
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]

export default new web3.eth.Contract(contractABI, contractAddress);