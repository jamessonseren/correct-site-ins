import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"

import home_bg from "../../assets/images/home_bg.jpg"
import robot_cellphone from "../../assets/images/robot_cellphone.png"
import robot from "../../assets/images/robot.png"

const Home = () => {


  return (
    <main>
      <section className="w-full h-[90vh] px-1 flex items-center" style={{background: `url(${home_bg}`}}>
        <div className="text-left w-auto md:w-2/3 m-auto text-white text-2md md:text-2xl border-l font-bold py-4 px-3 [text-shadow:_0_3px_10px_rgb(0_0_0_/_100%)]">
          <TypeAnimation sequence={[
            "A Correct surgiu no Brasil em 2018, com a finalidade de trazer o que existe de mais moderno e inovador, em um único APP. Atuamos nas áreas de Benefícios (RH), Intermediação de Negócios (Compras / Vendas), Pagamentos, Economia Familiar, Saúde e Bem Estar, Entretenimento, Clube de Vantagens e outras.",
            50
          ]}
          />
        </div>
      </section>
      <section className="h-[70vh] md:py-5 flex justify-evenly items-center">
          <motion.div className="w-1/2" 
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 1 }}
          >
            <p className="md:text-2xl text-1md">
              Para as Pessoas Físicas que buscam <span className="font-bold">praticidade, descontos, economia e vantagens</span>, lançamos o APPCorrect. Dentro do APP você pode realizar compras, pagamentos, recargas e muito mais, tudo isso na palma da sua mão.
              <br/><br />
              <span className="font-bold">Aqui seu Cashback é garantido em toda compra!</span>
            </p>
          </motion.div>
          <motion.div
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 1 }}
          >
            <img src={robot_cellphone} alt="correctRobot" className="md:w-44 md:h-44 w-24 h-24" />
          </motion.div>
      </section>
      <section className="h-[80vh] md:h-[70vh] md:py-5 flex justify-evenly items-center bg-[#00788c] text-white">
          <motion.div className="w-1/2" 
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 1 }}
          >
            <p className="md:text-2xl text-1md">
              Para o mundo Corporativo, a <span className="font-bold italic">Correct</span> lança no Mercado Brasileiro uma grande novidade na área de Recursos Humanos (Benefícios), como <strong>Adiantamento Salarial, Vale Alimentação, Refeição, Combustível, Programas de Saúde e outros</strong>. Tudo isso em uma plataforma de autogestão.
              <br/><br />
              <span className="font-bold">Você escolhe como quer trabalhar!</span >
            </p>
          </motion.div>
          <motion.div
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 1 }}
          >
            <img src={robot} alt="correctRobot" className="md:w-44 md:h-44 w-24 h-24" />
          </motion.div>
      </section>
    </main>
  )
}

export default Home