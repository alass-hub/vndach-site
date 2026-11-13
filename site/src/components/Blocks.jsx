/* Rendu des blocs de contenu.
 *
 * Le gras s'écrit **comme ceci** dans les textes. C'est la seule syntaxe
 * acceptée : les contenus restent lisibles dans le fichier source et le
 * site ne dépend d'aucune bibliothèque Markdown.
 */

const renderInline = (text) => {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => (
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : part
  ));
};

export default function Blocks({ blocks }) {
  return blocks.map((block, i) => {
    if (block.h3) return <h3 key={i}>{renderInline(block.h3)}</h3>;

    if (block.p) return <p key={i}>{renderInline(block.p)}</p>;

    if (block.list) {
      return (
        <ul key={i}>
          {block.list.map((item, j) => <li key={j}>{renderInline(item)}</li>)}
        </ul>
      );
    }

    if (block.ordered) {
      return (
        <ol key={i}>
          {block.ordered.map((item, j) => <li key={j}>{renderInline(item)}</li>)}
        </ol>
      );
    }

    if (block.steps) {
      return (
        <ol className="steps" key={i}>
          {block.steps.map((item, j) => <li key={j}>{renderInline(item)}</li>)}
        </ol>
      );
    }

    if (block.note) {
      return (
        <div className="note" key={i}>
          <strong>À savoir</strong>
          {renderInline(block.note)}
        </div>
      );
    }

    if (block.warning) {
      return (
        <div className="warning" key={i}>
          <strong>Important</strong>
          {renderInline(block.warning)}
        </div>
      );
    }

    if (block.path) return <code className="path" key={i}>{block.path}</code>;

    if (block.table) {
      return (
        <div className="table-wrap" key={i}>
          <table>
            <thead>
              <tr>{block.table.head.map((h, j) => <th key={j} scope="col">{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.table.rows.map((row, j) => (
                <tr key={j}>
                  {row.map((cell, k) => <td key={k}>{renderInline(cell)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return null;
  });
}
