import { awscdk } from "projen";
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: "2.20.0",
  defaultReleaseBranch: "main",
  name: "cdk-lambda-python",
  projenrcTs: true,
  deps: [
    '@aws-cdk/aws-lambda-python-alpha@2.20.0-alpha.0',
    'env-var', 'dotenv'
  ]

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const dotEnvFile = '.env';
project.gitignore.addPatterns(dotEnvFile);
project.gitignore.addPatterns('cdk.context.json');

project.synth();