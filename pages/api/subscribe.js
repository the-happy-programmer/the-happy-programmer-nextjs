import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export default async function subscribe(req, res) {
  const { email } = req.body;
  console.log('EMAILS', email);
  try {
    await mailchimp.lists.addListMember(process.env.AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    });
    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
