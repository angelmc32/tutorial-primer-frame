import { init, fetchQuery } from '@airstack/node';
import * as dotenv from 'dotenv';

dotenv.config();

console.log(process.env.AIRSTACK_API_KEY);

init(process.env.AIRSTACK_API_KEY ?? '');

export async function checkIsPoapHolder(userAddress: string) {
  console.log(userAddress);
  const query = `
    query MyQuery {
      Poaps(input: {filter: {eventId: {_eq: "167588"}, owner: {_eq: "${userAddress}"}}, blockchain: ALL}) {
        Poap {
          eventId
          owner {
            identity
          }
        }
      }
    }
  `;
  const { data, error } = await fetchQuery(query);

  if (!data || !data.Poaps || error) return false;
  if (data) {
    console.log(data);
    const ownerAddress = data.Poaps.Poap[0].owner.identity;
    console.log('is owner? >>>>>>', Boolean(ownerAddress));
    return Boolean(ownerAddress);
  }
}
