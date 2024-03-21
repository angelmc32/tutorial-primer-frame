import { Button, Frog, TextInput } from 'frog';
import { devtools } from 'frog/dev';
import { serveStatic } from 'frog/serve-static';
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel';

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
});

app.frame('/', (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: '#9d0772',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 16,
            padding: '0',
            whiteSpace: 'pre-wrap',
          }}
        >
          ¡GM! En este Frame podrás acuñar uno de nuestros NFTs
        </div>
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 16,
            padding: '0',
            whiteSpace: 'pre-wrap',
          }}
        >
          🍓 🍊 🫐 🍐
        </div>
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 16,
            padding: '0',
            whiteSpace: 'pre-wrap',
          }}
        >
          Creados por Cripto Street 🤙🏼
        </div>
      </div>
    ),
    intents: [
      <Button.Link href="https://frutero.club">El Club</Button.Link>,
      <Button.Link href="https://zora.co/">Colección</Button.Link>,
      <Button.Link href="https://twitter.com/Cripto_street">
        La Artista
      </Button.Link>,
      <Button action="/tokens-aceptados">➡️</Button>,
    ],
  });
});

app.frame('/tokens-aceptados', (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: '#9d0772',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 48,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            margin: 16,
            padding: '0',
            whiteSpace: 'pre-wrap',
          }}
        >
          Podrás acuñar hasta 4 NFTs si cuentas con:
        </div>
        <div
          style={{
            display: 'flex',
            padding: '0 96px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              textAlign: 'left',
              width: '50%',
            }}
          >
            <div
              style={{
                color: 'white',
                fontSize: 40,
                fontStyle: 'normal',
                letterSpacing: '-0.025em',
                lineHeight: 1.4,
                marginTop: 16,
                padding: '0',
                whiteSpace: 'pre-wrap',
              }}
            >
              1. $PULPA
            </div>
            <div
              style={{
                color: 'white',
                fontSize: 40,
                fontStyle: 'normal',
                letterSpacing: '-0.025em',
                lineHeight: 1.4,
                marginTop: 16,
                padding: '0',
                whiteSpace: 'pre-wrap',
              }}
            >
              2. POAP Ponche de Frutas
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              textAlign: 'left',
              width: '50%',
            }}
          >
            <div
              style={{
                color: 'white',
                fontSize: 40,
                fontStyle: 'normal',
                letterSpacing: '-0.025em',
                lineHeight: 1.4,
                marginTop: 16,
                padding: '0',
                whiteSpace: 'pre-wrap',
              }}
            >
              3. POAP ETH Cinco de Mayo
            </div>
            <div
              style={{
                color: 'white',
                fontSize: 40,
                fontStyle: 'normal',
                letterSpacing: '-0.025em',
                lineHeight: 1.4,
                marginTop: 16,
                padding: '0',
                whiteSpace: 'pre-wrap',
              }}
            >
              4. POAP ETH Latam
            </div>
          </div>
        </div>
      </div>
    ),
    intents: [
      <Button action="/pulpa">1</Button>,
      <Button action="/ponche-de-frutas">2</Button>,
      <Button action="/eth-cinco-de-mayo">3</Button>,
      <Button action="/eth-latam">4</Button>,
    ],
  });
});

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined';
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development';
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
