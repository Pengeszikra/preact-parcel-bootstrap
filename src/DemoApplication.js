import {h} from 'preact';
import './index.scss';

// TODO: remove

export default () => (
  <main>
    <h2>Preact application bootstrap with Parcel</h2>
    <article>Minimal configuration for fast and small react application development</article>
    <h3>Stepp of create minimal preact bundler</h3>
    <pre>{`
      1. npm init -y

      2. yarn add -D parcel-bundler

      3. yarn add preact

      4. edit package.json :
          "scripts": {
            "start": "parcel ./src/index.html",
            "build": "parcel build ./src/index.html"
          },

      5. development:
            yarn start

          coding with vs code:
            code .

          build:
            yarn build                            
    `}</pre>
  </main>
);