import web3 from './web3';

const lotteryContractAddress = '0x2131c04377e47f5c6186c0eff0f8e701eafc5a4c';
const lotteryContractABI = [
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
		"constant": false,
		"inputs": [
			{
				"name": "hospitalAddressI",
				"type": "address"
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
		"constant": false,
		"inputs": [
			{
				"name": "pharmacyAddressI",
				"type": "address"
			}
		],
		"name": "addPharmacy",
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

export default new web3.eth.Contract(lotteryContractABI, lotteryContractAddress);