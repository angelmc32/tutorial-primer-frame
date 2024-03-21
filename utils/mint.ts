import {
  createPublicClient,
  createWalletClient,
  Hex,
  http,
  TransactionExecutionError,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';
import { Zora1155ABI } from '../abi/Zora1155.js';
import * as dotenv from 'dotenv';

dotenv.config();

const contractAddress = '0x0d8c9e75f0307e4eb542446bd88dffe9a0cfbd3a'; // colección tutorial-primer-frame
console.log(process.env.MINTER_PRIVATE_KEY);

const account = privateKeyToAccount(process.env.MINTER_PRIVATE_KEY as Hex);

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(process.env.ALCHEMY_SEP_API_URL ?? ''),
});

const walletClient = createWalletClient({
  chain: sepolia,
  transport: http(process.env.ALCHEMY_SEP_API_URL ?? ''),
});

export async function mintNft(toAddress: `0x${string}`) {
  console.log(toAddress);
  const { request } = await publicClient.simulateContract({
    address: contractAddress,
    abi: Zora1155ABI,
    functionName: 'adminMint',
    args: [toAddress, 1n, 1n, `0x`],
    account,
  });
  if (!request) {
    throw new Error('Could not simulate contract');
  }

  try {
    const hash = await walletClient.writeContract(request);
    console.log(hash);
    return { hash, isSuccess: true };
  } catch (error) {
    console.log('error>>>>>', error);
    if (
      error instanceof TransactionExecutionError &&
      error.details.startsWith('gas required exceeds allowance')
    ) {
      console.log('Out of gas...');
    }
    return { error, isSuccess: false };
  }
}

export async function balanceOf(address: string) {
  try {
    const balanceData = await publicClient.readContract({
      address: contractAddress,
      abi: Zora1155ABI,
      functionName: 'balanceOf',
      args: [address as `0x`, 0n],
    });
    const balance: number = Number(balanceData);
    return balance;
  } catch (error) {
    console.log(error);
    return error;
  }
}
