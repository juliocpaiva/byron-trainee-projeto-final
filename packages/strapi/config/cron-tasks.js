module.exports = {
  sendNewsletter: {
    task: async ({ strapi }) => {
      const subscribers = await strapi.entityService.findMany(
        "api::subscriber.subscriber",
        {
          fields: ["email"],
        }
      );

      const newsletter = await strapi.entityService.findMany(
        "api::newsletter.newsletter",
        {
          sort: { createdAt: "ASC" },
          filters: { sent: false },
          populate: {
            image: true,
          },
          fields: ["id", "subject", "content", "sent", "sentAt"],
        }
      );

      if (newsletter.length === 0) {
        strapi.log.info("No newsletter to send");
        return;
      }

      const emailTemplate = {
        subject: "<%= newsletter.subject %>",
        text: `<%= newsletter.content %>
        <%= newsletter.unsubscribeUrl %>
        `,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="pt-BR">

  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <style>
      @font-face {
        font-family: 'sans-serif';
        font-style: normal;
        font-weight: 400;
        mso-font-alt: 'sans-serif';

      }

      * {
        font-family: 'sans-serif', sans-serif;
      }
    </style>
  </head>
  <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0"><%= newsletter.subject %></div>
  <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;padding-left:1rem;padding-right:1rem">
    <tbody>
      <tr style="width:100%">
        <td>
          <div data-id="react-email-markdown">
            <h1 style="font-weight:500;padding-top:20px;font-size:2.5rem"><%= newsletter.subject %></h1>
            <%= newsletter.content %>
          </div><a href="<%= newsletter.unsubscribeUrl %>" style="color:rgb(38,38,38);text-decoration:none;font-family:Inter, sans-serif;font-size:0.875rem;line-height:1.25rem;text-decoration-line:underline;font-weight:500" target="_blank">Cancelar inscrição na newsletter</a>
        </td>
      </tr>
    </tbody>
  </table>

</html>`,
      };

      const sentAt = new Date();

      for (const subscriber of subscribers) {
        await strapi.plugins["email"].services.email.sendTemplatedEmail(
          {
            to: subscriber.email,
          },
          emailTemplate,
          {
            newsletter: {
              subject: newsletter[0].subject,
              content: newsletter[0].content,
              unsubscribeUrl: `https://google.com`,
            },
          }
        );
      }

      await strapi.entityService.update(
        "api::newsletter.newsletter",
        newsletter[0].id,
        {
          data: {
            sent: true,
            sentAt,
          },
        }
      );

      strapi.log.info(`Newsletter of id ${newsletter[0].id} sent at ${sentAt}`);
    },
    options: {
      rule: "0 0/1 * * * *",
    },
  },
};
