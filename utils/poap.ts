import { init, fetchQuery } from '@airstack/node';

init('1813c9f9ed7a74ae5a971b99d7580b290');

const getPoapHoldersQuery = `query GetPoapHolders() {
    Poaps(
      input: {filter: {eventId: {_eq: "167588"}}, blockchain: ALL, limit: 150}
    ) {
      Poap {
        tokenId
        tokenAddress
        blockchain
        eventId
        poapEvent {
          contentValue {
            image {
              small
            }
            video {
              original
            }
            audio {
              original
            }
          }
          logo: contentValue {
            image {
              small
            }
          }
        }
        id
blockchain
tokenId
tokenAddress
eventId
poapEvent {
  contentValue {
    image {
      original
      medium
      large
      extraSmall
      small
    }
    video {
      original
    }
    audio {
      original
    }
  }
  logo: contentValue {
    image {
      small
      medium
    }
  }
  blockchain
  eventName
}
owner {
  identity
  addresses
  socials {
    blockchain
    dappName
    profileName
    profileHandle
  }
  primaryDomain {
    name
  }
  domains {
    name
  }
  xmtp {
    isXMTPEnabled
  }
}
      }
    } 
  }`; // Replace with GraphQL Query

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

  if (!data.Poaps || error) return false;
  if (data) {
    console.log(data);
    const ownerAddress = data.Poaps.Poap[0].owner.identity;
    console.log('is owner? >>>>>>', Boolean(ownerAddress));
    return Boolean(ownerAddress);
  }

  return data;
}
