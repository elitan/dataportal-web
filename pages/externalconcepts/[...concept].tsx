import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SettingsContext } from '../../components';
import EntrystoreProvider from '../../components/EntrystoreProvider/EntrystoreProvider';
import { ConceptPage } from '../../components/pages/ConceptPage';
import { useScript } from '../../hooks/useScript';
export default function Concept() {
  const { env } = useContext(SettingsContext);
  const { query } = useRouter() || {};
  const { concept } = query || {};
  const paths = [...(concept ? (concept as string[]) : [])];
  const scheme = paths.shift();
  const curi = paths.join('/');
  const entryUri = `${scheme}://${curi}`;
  const postscribeStatus = useScript(
    'https://dataportal.azureedge.net/cdn/postscribe.min.js',
    'sha384-1nPAWyZS0cvGLWSoWOrkTZAy8Xq8g6llEe985qo5NRPAeDi+F9h9U+0R8v56XWCM',
    'anonymous'
  );
  return postscribeStatus === 'ready' && paths.length > 0 ? (
    <EntrystoreProvider
      env={env}
      entryUri={entryUri}
      entrystoreUrl={env.ENTRYSCAPE_TERMS_PATH}
      fetchMore={false}
    >
      <ConceptPage
        scheme={scheme}
        curi={curi}
      />
    </EntrystoreProvider>
  ) : (
    <></>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res, params }) => {
  const concept = (params?.concept as string[]) || [];
  const scheme = concept[0];

  if (scheme != 'http' && scheme != 'https') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};
