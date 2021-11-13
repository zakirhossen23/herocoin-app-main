import {
  establishConnection,
  checkProgram,
  establishPayer,
  reportPrice,
  getPrice
} from './solanalinkchain';

export function main2() {

  console.log("Chainlink")

  // // Establish connection to the cluster
  establishConnection()

  // // Determine who pays for the fees
  //establishPayer()

  // // Check if the program has been deployed
  checkProgram()

  // // Make a transaction to get price
  getPrice()

  // // Find out how many times that account has been greeted
  // reportPrice()

}
