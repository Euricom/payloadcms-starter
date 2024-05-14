import { mongooseAdapter } from '@payloadcms/db-mongodb';
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { EmailAdapter, buildConfig } from 'payload/config';
// import sharp from 'sharp'
import { fileURLToPath } from 'url';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';

import { Users } from './collections/Users';
import { Pages } from './collections/Pages';
import { Media } from './collections/Media';
import PayloadBackToAppButton from './components/PayLoadBackToAppButton';
import nodemailer from 'nodemailer';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      beforeNavLinks: [PayloadBackToAppButton],
    },
  },
  collections: [Users, Pages, Media],
  editor: lexicalEditor({}),
  // plugins: [payloadCloud()], // TODO: Re-enable when cloud supports 3.0
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  email: nodemailerAdapter({
    defaultFromAddress: '',
    defaultFromName: '',
    transport: await nodemailer.createTransport({
      host: 'localhost',
      port: 1025,
      auth: {
        user: 'username',
        pass: 'password',
      },
    }),
  }),

  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable

  // sharp,
});
