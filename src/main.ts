import { App, CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PythonFunction } from '@aws-cdk/aws-lambda-python-alpha';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { join } from 'path';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';

export class LambdaTemplateFunction extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const myLambda = new PythonFunction(this, 'MyFunction', {
      entry: join(__dirname, 'lambda-handler'),
      runtime: Runtime.PYTHON_3_9,
      logRetention: RetentionDays.ONE_WEEK
    });

    new CfnOutput(this, `MyFunctionOutput`, {value: myLambda.functionArn})
  }
}

const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new LambdaTemplateFunction(app, `myLambdaTemplate`, { env: devEnv });

app.synth();
