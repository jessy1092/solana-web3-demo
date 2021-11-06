import { Keypair, PublicKey } from '@solana/web3.js';

import * as bs58 from 'bs58';

import { CONNECTION, FEE_PAYER } from '../../helper/const';

// 查詢SOL餘額

async function main() {
	// console.log(FEE_PAYER.publicKey);
	const decodeSuccess = FEE_PAYER.publicKey.toBytes();

	console.log(`pubkey: [${Array.from(decodeSuccess)}]`);
	console.log(PublicKey.isOnCurve(decodeSuccess));

	const decodeError = bs58.decode('12oaXPTQCZHNc1Pn8UmQvheiDHWtYmA6pVFPZi25jcG');

	console.log(`pubkey: [${Array.from(decodeError)}]`);
	console.log(PublicKey.isOnCurve(decodeError));
}

main().then(
	() => process.exit(),
	(err) => {
		console.error(err);
		process.exit(-1);
	},
);
