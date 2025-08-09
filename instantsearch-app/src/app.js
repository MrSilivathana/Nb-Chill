const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'PUJCEKTURU',
  '9b0e5f7010bdab71d2b23e958fd937f5'
);

const search = instantsearch({
  indexName: 'sinlothub_netlify_app_pujcekturu_pages',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
        <article>
          <img src=${hit.url} alt=${hit.content} />
          <div>
            <h1>${components.Highlight({ hit, attribute: 'content' })}</h1>
            <p>${components.Highlight({ hit, attribute: 'description' })}</p>
            <p>${components.Highlight({ hit, attribute: 'keywords' })}</p>
          </div>
        </article>
      `,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
