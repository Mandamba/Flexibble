import { graph, config, scalar} from '@grafbase/sdk'


const g = graph.Standalone()

const User = g.type(
  'User', {
    name: scalar.string(),
    email: scalar.email(), 
    avatarUrl: scalar.url(),
    description: scalar.string().optional(),
    gitHubUrl: scalar.string().optional(),
    linkedInUrl: scalar.url().optional(),
  }
);

const Projects = g.type(
  "Project",{
    title: scalar.string(),
    description: scalar.string(),
    imageUrl: scalar.url(),
    liveSiteUrl: scalar.url(),
    githubUrl: scalar.url(),
    category: scalar.string(),
    createdBy: g.ref(User).list()
  }
);

export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public()
    },
  },
})
