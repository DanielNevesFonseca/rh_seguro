import { Container } from "@/components/common/Container"

export const HeaderSeguros = () => {
  return (
    <section className="bg-white py-20 flex flex-col">
        <Container>
          <div className="flex flex-col gap-5 items-center mx-auto">
            <span className="text-lg font-raleway font-bold text-secondary-500">
              Planos e Seguros{" "}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-lora text-primary-900 text-center">
              Conecte-se aos Melhores Planos e Seguros
            </h1>
            <p className="mt-10 text-lg text-center w-3/4">
              Aproveite nossa extensa rede de contatos para acessar planos de
              saúde, odontológicos e seguros pessoais de alta qualidade.
            </p>
            <p className="text-lg text-center w-3/4">
              Oferecemos soluções personalizadas que não apenas protegem seus
              colaboradores e bens, mas também proporcionam vantagens fiscais e
              financeiras para sua empresa.
            </p>
          </div>
        </Container>
      </section>
  )
}