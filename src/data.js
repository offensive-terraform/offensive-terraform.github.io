const data = [
  {
    name: "EC2 Instance Credential Exfiltration",
    provider: "AWS",
    github:
      "https://github.com/offensive-terraform/terraform-aws-ec2-instance-credential-exfiltration",
    terraform:
      "https://registry.terraform.io/modules/offensive-terraform/ec2-instance-credential-exfiltration/aws",
    desc:
      "Offensive Terraform module which creates EC2 instance and exfiltrate credential from Instance metadata to external URL.",
    image:
      "https://raw.githubusercontent.com/offensive-terraform/terraform-aws-ec2-instance-credential-exfiltration/master/diagram.jpg",
  },
  {
    name: "Cross Account Persistence",
    provider: "AWS",
    github:
      "https://github.com/offensive-terraform/terraform-aws-cross-account-persistence",
    terraform:
      "https://registry.terraform.io/modules/offensive-terraform/cross-account-persistence/aws",
    desc:
      "Offensive Terraform module which creates an IAM role with trust relationship with attacker's AWS account and attaches managed IAM Policy to an IAM role.",
    image:
      "https://raw.githubusercontent.com/offensive-terraform/terraform-aws-cross-account-persistence/master/diagram.jpg",
  },
  {
    name: "IAM Create User Persistence",
    provider: "AWS",
    github:
      "https://github.com/offensive-terraform/terraform-aws-iam-create-user-persistence",
    terraform:
      "https://registry.terraform.io/modules/offensive-terraform/cross-account-persistence/aws",
    desc:
      "Offensive Terraform module which creates an IAM user and an access key then attaches managed IAM Policy to an IAM user.",
    image:
      "https://raw.githubusercontent.com/offensive-terraform/terraform-aws-iam-create-user-persistence/master/diagram.jpg",
  },
  {
    name: "EC2 Instance Reverse Shell",
    provider: "AWS",
    github:
      "https://github.com/offensive-terraform/terraform-aws-ec2-instance-reverse-shell",
    terraform:
      "https://registry.terraform.io/modules/offensive-terraform/ec2-instance-reverse-shell/aws/",
    desc:
      "Offensive Terraform module which creates EC2 instance and reverse shell from an EC2 instance to attacker machine.",
    image:
      "https://raw.githubusercontent.com/offensive-terraform/terraform-aws-ec2-instance-reverse-shell/master/diagram.jpg",
  },
  {
    name: "S3 Subdomain Takeover",
    provider: "AWS",
    github:
      "https://github.com/offensive-terraform/terraform-aws-s3-subdomain-takeover",
    terraform:
      "https://registry.terraform.io/modules/offensive-terraform/s3-subdomain-takeover/aws",
    desc:
      "Offensive Terraform module which takes over a subdomain which has a CNAME record pointing to non-existing S3 bucket in target's Route53. The module creates a S3 bucket with a name as subdomain in the specific AWS region that CNAME record is pointing to. Also, it uploads a simple web page with '404 Page Not Found' text.",
    image:
      "https://raw.githubusercontent.com/offensive-terraform/terraform-aws-s3-subdomain-takeover/master/diagram.jpg",
  },
  {
    name: "Lambda Function Credential Exfiltration",
    provider: "AWS",
    github:
      "https://github.com/offensive-terraform/terraform-aws-lambda-function-credential-exfiltration",
    terraform:
      "https://registry.terraform.io/modules/offensive-terraform/lambda-function-credential-exfiltration/aws",
    desc:
      "Offensive Terraform module which creates Lambda function with existing IAM role. The module invokes it automatically to exfiltrate AWS temporary credential from environment variables and send it back with response.",
    image:
      "https://raw.githubusercontent.com/offensive-terraform/terraform-aws-lambda-function-credential-exfiltration/master/diagram.jpg",
  },
];

export default data;
