import { CONNECTION, FEE_PAYER } from '../../helper/const';

// 查詢SOL餘額

async function main() {
	console.log(await CONNECTION.getBalance(FEE_PAYER.publicKey));
}

main().then(
	() => process.exit(),
	(err) => {
		console.error(err);
		process.exit(-1);
	},
);
