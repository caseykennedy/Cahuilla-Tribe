type ChildImageSharp = {
  childImageSharp: {
    fluid: {
      aspectRatio: number
      src: string
      srcSet: string
      sizes: string
      base64: string
      tracedSVG: string
      srcWebp: string
      srcSetWebp: string
    }
  }
}

type DepartmentShape = {
  pageContext: {
    page: {
      cell: number
      department: string
      email: string
      fax: number
      government: boolean
      id: string
      image: {
        asset: {
          fluid: {
            src: string
            aspectRatio: number
            base64: string
            sizes: string
            srcSet: string
            srcSetWebp: string
            srcWebp: string
          }
        }
      }
      name: string
      pageTitle: string
      slug: {
        current: string
      }
      telephone: number
      _rawContent: {
        _key: string
        children: {
          _key: string
          text: string
        }[]
      }[]
      _rawIntro: {
        _key: string
        children: {
          _key: string
          text: string
        }[]
      }[]
    }
    next: {
      pageTitle: string
      slug: {
        current: string
      }
    }
    prev: {
      pageTitle: string
      slug: {
        current: string
      }
    }
  }
}

type PeopleShape = {
  people: {
    edges: {
      node: {
        cell: number
        department: string
        email: string
        fax: number
        id: string
        image: {
          asset: {
            fluid: {
              src: string
              aspectRatio: number
              base64: string
              sizes: string
              srcSet: string
              srcSetWebp: string
              srcWebp: string
            }
          }
        }
        name: string
        seated: string
        telephone: number
        title: string
        slug: {
          current: string
        }
        _rawBio: {
          _key: string
          children: {
            _key: string
            text: string
          }[]
        }[]
        _rawContent: {
          _key: string
          children: {
            _key: string
            text: string
          }[]
        }[]
        bio: {
          _key: string
          _type: string
          style: string
          list: string
        }
      }
    }[]
  }
}