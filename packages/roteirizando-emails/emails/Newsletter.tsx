import {
  Container,
  Font,
  Head,
  Html,
  Img,
  Link,
  Markdown,
  Preview,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export const Newsletter = () => {
  const { content, subject, unsubscribeUrl, bannerUrl } = {
    content: "# Teste\n\nTeste\n\n",
    bannerUrl:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subject: "Testando subject",
    unsubscribeUrl: "https://google.com",
  };

  return (
    <Html lang="pt-BR">
      <Head>
        <Font fontFamily="sans-serif" fallbackFontFamily="sans-serif" />
      </Head>
      <Tailwind
        config={{
          theme: {
            fontFamily: {
              sans: ["Inter", "sans-serif"],
            },
          },
        }}
      >
        <Preview>{subject}</Preview>
        <div className="px-4">
          <Img
            src={bannerUrl}
            alt="Banner"
            className="rounded-xl w-full h-96 object-cover"
          />
        </div>
        <Container className="px-4">
          <Markdown>{content}</Markdown>
          <Link
            href={unsubscribeUrl}
            className="font-sans text-sm text-neutral-800 underline font-medium"
          >
            Cancelar inscrição na newsletter
          </Link>
        </Container>
      </Tailwind>
    </Html>
  );
};

export default Newsletter;
