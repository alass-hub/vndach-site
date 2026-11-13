import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DocPage from './components/DocPage';
import Home from './pages/Home';
import GuidesIndex from './pages/GuidesIndex';
import NotFound from './pages/NotFound';
import { allDocs } from './content';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="guides" element={<GuidesIndex />} />

        {/* Une route par document : ajouter un texte dans content/
            suffit à le publier, sans toucher au routeur. */}
        {allDocs.map((doc) => (
          <Route key={doc.slug} path={doc.slug} element={<DocPage doc={doc} />} />
        ))}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
