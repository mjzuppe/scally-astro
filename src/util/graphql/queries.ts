const get = async (query: string): Promise<any> =>
  await fetch(import.meta.env.STRAPI_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.STRAPI_JWT}`,
    },
    body: JSON.stringify({ query }),
  }).then((res) => res.json());

const GET_ALERTS_ALL = async () =>
  await get(ALERTS).then((r) => r.data.alerts.data);

const ALERTS = `
query {
  alerts {
    data {
      id
      attributes {
        title
      }
    }
  }
}
`;

const GET_COMPONENTS_ALL = async () =>
  await get(COMPONENTS).then((r) => r.data.components.data);

const COMPONENTS = `
query {
  components {
    data {
      id
      attributes {
        title
      }
    }
  }
}
`;

const GET_COMPONENTS_BY_PAGE = async (page: string): Promise<any> =>
  await get(COMPONENTS_BY_PAGE(page)).then((r) => r.data.components.data);

const COMPONENTS_BY_PAGE = (page: string): string => `
query {
  components(filters: {page: {eq: "${page}"}}) {
		data {
      attributes {
        title
        category
      }
    }
  }
}`;

const GET_LINKS_ALL = async () =>
  await get(LINKS).then((r) => r.data.links.data);

const LINKS = `
query {
  links {
    data {
      id
      attributes {
        title
      }
    }
  }
}
`;

const GET_LINKS_BY_PAGE = async (page: string): Promise<any> =>
  await get(LINKS_BY_PAGE(page)).then((r) => r.data.links.data);

const LINKS_BY_PAGE = (page: string): string => `
query {
  links(filters: {page: {eq: "${page}"}}) {
		data {
      attributes {
        title
      }
    }
  }
}`;

const GET_FORMS_ALL = async () =>
  await get(FORMS).then((r) => r.data.forms.data);

const FORMS = `
query {
  forms {
    data {
      id
      attributes {
        title
      }
    }
  }
}
`;

const GET_FORMS_BY_PAGE = async (page: string): Promise<any> =>
  await get(FORMS_BY_PAGE(page)).then((r) => r.data.forms.data);

const FORMS_BY_PAGE = (page: string): string => `
query {
  forms(filters: {page: {eq: "${page}"}}) {
		data {
      attributes {
        title
      }
    }
  }
}`;

const GET_PAGES_ALL = async () =>
  await get(PAGES).then((r) => r.data.pages.data);

const PAGES = `
query {
  pages {
    data {
      id
      attributes {
        title
      }
    }
  }
}
`;

const GET_POSTS_ALL = async () =>
  await get(POSTS).then((r) => r.data.posts.data);

const POSTS = `
query {
  posts {
    data {
      id
      attributes {
        title
      }
    }
  }
}
`;

const GET_SITE_ALL = async () => await get(SITE).then((r) => r.data.site.data);

const SITE = `
query {
  site {
    data {
      id
      attributes {
        favicon
      }
    }
  }
}
`;

const GET_SOCIALS_ALL = async () =>
  await get(SOCIALS).then((r) => r.data.socials.data);

const SOCIALS = `
query {
  socials {
    data {
      id
      attributes {
        network
      }
    }
  }
}
`;

export {
  GET_ALERTS_ALL,
  GET_COMPONENTS_ALL,
  GET_COMPONENTS_BY_PAGE,
  GET_LINKS_ALL,
  GET_LINKS_BY_PAGE,
  GET_FORMS_ALL,
  GET_FORMS_BY_PAGE,
  GET_PAGES_ALL,
  GET_POSTS_ALL,
  GET_SITE_ALL,
  GET_SOCIALS_ALL,
};
