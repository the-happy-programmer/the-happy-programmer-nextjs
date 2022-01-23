import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

async function callPing() {
  const response = await mailchimp.ping.get();
  console.log(response);
  console.log('ela repaidi mou');
}
callPing();
