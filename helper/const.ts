import { Keypair, Connection, PublicKey } from '@solana/web3.js';

// 5YNmS1R9nNSCDzb5a7mMJ1dwK9uHeAAF4CmPEwKgVWr8
// export const FEE_PAYER = Keypair.fromSecretKey(
//   Uint8Array.from([
//     206, 54, 90, 62, 42, 169, 79, 30, 10, 214, 71, 58, 161, 79, 210, 133, 123, 207, 196, 142, 168, 155, 129, 108, 35,
//     155, 218, 75, 82, 233, 79, 40, 67, 120, 93, 30, 66, 81, 199, 231, 199, 75, 70, 229, 64, 75, 252, 105, 43, 152, 135,
//     212, 92, 179, 44, 129, 174, 181, 26, 186, 90, 20, 83, 69,
//   ])
// );

// 12oaXPTQCZHNc1Pn8UmQvheiDHWtYmA6pVFPZi25jcGM
export const FEE_PAYER = Keypair.fromSecretKey(
	Uint8Array.from([
		120, 54, 99, 48, 26, 219, 68, 44, 217, 214, 127, 124, 123, 137, 32, 167, 113, 151, 241, 138,
		217, 118, 225, 237, 210, 233, 133, 155, 201, 58, 218, 145, 0, 118, 63, 41, 9, 225, 107, 153,
		218, 184, 212, 56, 153, 46, 62, 4, 21, 209, 178, 248, 167, 79, 90, 5, 10, 240, 134, 147, 98, 40,
		110, 22,
	]),
);
// private key for phantom:: 3QQ9Qq4tAYjvjuPDerkQr3D8mfhwYTtSZ2dJAmtbLo4ST185wU6Ka2L4uSZBeY2UyhpFs656RaWTJNQ6pLVWPNYV

// 2hieMSXcsk3F3bZE8iDe7WGREZesRDnDjHtdPVjya4NA
// export const ALICE = Keypair.fromSecretKey(
//   Uint8Array.from([
//     16, 169, 21, 27, 237, 134, 45, 100, 113, 192, 66, 107, 174, 36, 175, 110, 195, 29, 133, 60, 134, 224, 92, 212, 74,
//     138, 10, 139, 228, 27, 48, 106, 25, 74, 1, 158, 20, 222, 117, 41, 169, 27, 181, 228, 44, 110, 140, 200, 168, 187,
//     24, 5, 88, 67, 100, 134, 162, 184, 245, 220, 111, 72, 139, 31,
//   ])
// );

// AcaV1iRB5xsyyBfa9dEeBJKZPz6E2G8911hzhMvS7ebD
export const ALICE = Keypair.fromSecretKey(
	Uint8Array.from([
		26, 233, 253, 220, 193, 109, 27, 238, 83, 218, 155, 226, 1, 255, 5, 63, 111, 204, 89, 116, 245,
		146, 47, 192, 70, 3, 30, 29, 215, 143, 75, 56, 142, 214, 94, 182, 102, 18, 51, 104, 88, 206,
		207, 72, 38, 48, 36, 45, 180, 244, 178, 122, 23, 187, 233, 75, 170, 198, 188, 100, 226, 144,
		117, 148,
	]),
);
// private key for phantom:: YDAK3Bbt4Vfxdr71Zv1RBhHXW68dJ5iu11MqPgvNbA2B3rkAE9CgHDSTuY8eFUNYZLy8TE1DN2dyAuJ5JboN8qH

// EbReUE9upyR8Y5K5NrwKbGr5wF5QfjiP4xAUjUsVsJmr
export const Bob = Keypair.fromSecretKey(
	Uint8Array.from([
		55, 61, 177, 174, 23, 1, 161, 182, 118, 137, 197, 25, 52, 185, 173, 234, 80, 235, 81, 32, 249,
		26, 114, 41, 89, 135, 142, 248, 80, 167, 132, 19, 201, 249, 139, 126, 145, 3, 176, 31, 45, 39,
		19, 108, 28, 224, 81, 97, 21, 155, 154, 129, 220, 134, 93, 28, 246, 52, 70, 35, 163, 218, 167,
		29,
	]),
);
// private key for phantom:: 274MMLGbHNzTw9yZzAS5qSi6kjbnvAo99XCZxwmYHhNruUvgW5Sv551DgbygFLvy7mFC34MQ9PNabn3XRPebBQt4

export const API_ENDPOINT = 'http://api.devnet.solana.com';
// export const API_ENDPOINT = "http://localhost:8899";

export const CONNECTION = new Connection(API_ENDPOINT);

export const TEST_MINT = new PublicKey('E4ZN2KmnVmpwLwjJNAwRjuQLeE5iFHLcAJ8LGB7FMaGQ');

export const ALICE_TOKEN_ADDRESS_1 = new PublicKey('3ug8rjJdifEcTExVXFkaGuSjR3VZoDWi49ghA8gYpZiF');
export const FEE_TOKEN_ADDRESS_DEVNET = new PublicKey(
	'12oaXPTQCZHNc1Pn8UmQvheiDHWtYmA6pVFPZi25jcGM',
);

export const ALICE_TOKEN_ADDRESS_2 = new PublicKey('8Rs6tAqLUDzVc3GweP71sefv68ejsW8dG9ZssWpqfhBP');
