import { Button, Frog, TextInput } from 'frog';
import { devtools } from 'frog/dev';
import { serveStatic } from 'frog/serve-static';
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel';
import { checkIsPoapHolder } from '../utils/poap.js';
import { mintNft } from '../utils/mint.js';

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
      <Button action="/tokens-aceptados">Iniciar</Button>,
      <Button.Link href="https://zora.co/">Arte</Button.Link>,
      <Button.Link href="https://twitter.com/Cripto_street">
        Artista
      </Button.Link>,
      <Button.Link href="https://frutero.club">Frutero</Button.Link>,
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
        <div
          style={{
            color: 'white',
            fontSize: 48,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 48,
            padding: '0',
            whiteSpace: 'pre-wrap',
          }}
        >
          Selecciona el número que quieres validar
        </div>
      </div>
    ),
    intents: [
      <TextInput placeholder="Introduce tu dirección..." />,
      <Button action="/pulpa" value="165689">
        1
      </Button>,
      <Button action="/ponche-de-frutas" value="165689">
        2
      </Button>,
      <Button action="/eth-cinco-de-mayo" value="167588">
        3
      </Button>,
      <Button action="/eth-latam" value="170780">
        4
      </Button>,
    ],
  });
});

app.frame('/pulpa', async (c) => {
  const { inputText, buttonValue } = c;
  const isPoapHolder = await checkIsPoapHolder(
    inputText as string,
    buttonValue as string
  );
  if (isPoapHolder) {
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
            Cumples con este requisito, ¡genial!
          </div>
        </div>
      ),
      intents: [
        <Button action="/tokens-aceptados">Atrás</Button>,
        <Button action="/mint" value={inputText}>
          Acuñar
        </Button>,
        <Button.Reset>Reiniciar</Button.Reset>,
      ],
    });
  } else {
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
            Lo sentimos, no cumples con este requisito. Puedes intentar con otro
            token...
          </div>
        </div>
      ),
      intents: [
        <Button action="/tokens-aceptados">Atrás</Button>,
        <Button.Reset>Reiniciar</Button.Reset>,
      ],
    });
  }
});

app.frame('/ponche-de-frutas', async (c) => {
  const { inputText, buttonValue } = c;
  const isPoapHolder = await checkIsPoapHolder(
    inputText as string,
    buttonValue as string
  );
  if (isPoapHolder) {
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
            Cumples con este requisito, ¡genial!
          </div>
        </div>
      ),

      intents: [
        <Button action="/tokens-aceptados">Atrás</Button>,
        <Button action="/mint" value={inputText}>
          Acuñar
        </Button>,
        <Button.Reset>Reiniciar</Button.Reset>,
      ],
    });
  } else {
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
            Lo sentimos, no cumples con este requisito. Puedes intentar con otro
            token...
          </div>
        </div>
      ),
      intents: [
        <Button action="/tokens-aceptados">Atrás</Button>,
        <Button.Reset>Reiniciar</Button.Reset>,
      ],
    });
  }
});

app.frame('/eth-cinco-de-mayo', async (c) => {
  const { inputText, buttonValue } = c;
  const isPoapHolder = await checkIsPoapHolder(
    inputText as string,
    buttonValue as string
  );
  if (isPoapHolder) {
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
            Cumples con este requisito, ¡genial!
          </div>
        </div>
      ),
      intents: [
        <Button action="/tokens-aceptados">Atrás</Button>,
        <Button action="/mint" value={inputText}>
          Acuñar
        </Button>,
        <Button.Reset>Reiniciar</Button.Reset>,
      ],
    });
  } else {
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
            Lo sentimos, no cumples con este requisito. Puedes intentar con otro
            token...
          </div>
        </div>
      ),
      intents: [
        <Button action="/tokens-aceptados">Atrás</Button>,
        <Button.Reset>Reiniciar</Button.Reset>,
      ],
    });
  }
});

app.frame('/eth-latam', async (c) => {
  const { inputText, buttonValue } = c;
  const isPoapHolder = await checkIsPoapHolder(
    inputText as string,
    buttonValue as string
  );
  if (isPoapHolder) {
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
            Cumples con este requisito, ¡genial!
          </div>
        </div>
      ),
      intents: [
        <Button action="/tokens-aceptados">Atrás</Button>,
        <Button action="/mint" value={inputText}>
          Acuñar
        </Button>,
        <Button.Reset>Reiniciar</Button.Reset>,
      ],
    });
  } else {
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
            Lo sentimos, no cumples con este requisito. Puedes intentar con otro
            token...
          </div>
        </div>
      ),
      intents: [
        <Button action="/tokens-aceptados">Atrás</Button>,
        <Button.Reset>Reiniciar</Button.Reset>,
      ],
    });
  }
});

app.frame('/mint', async (c) => {
  const { buttonValue } = c;
  const mintRes = await mintNft(buttonValue as `0x${string}`);
  if (mintRes.isSuccess) {
    console.log(mintRes.hash);
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
              display: 'flex',
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
            Se ha enviado la transacción para acuñar tx: {mintRes.hash}
          </div>
        </div>
      ),
      intents: [
        <Button.Link
          href={`
          https://sepolia.etherscan.io/tx/${mintRes.hash}`}
        >
          Scanner
        </Button.Link>,
        <Button.Reset>Reiniciar</Button.Reset>,
      ],
    });
  } else {
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
            Lo sentimos, no pudimos completar la transacción
          </div>
        </div>
      ),
      intents: [
        <Button action="/tokens-aceptados">Atrás</Button>,
        <Button.Reset>Reiniciar</Button.Reset>,
      ],
    });
  }
});

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined';
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development';
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
