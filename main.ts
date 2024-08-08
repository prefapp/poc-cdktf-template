import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const a = "{{ $base }}"
    
    console.log(a)
    
  }
}

const app = new App();
new MyStack(app, "poc-cdktf-template");
app.synth();
