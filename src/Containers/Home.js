import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
} from "react-share";
class Home extends Component {
  state = {
    stage: 0,
  };

  handleChangeStage = stage => event => {
    this.setState({ stage: stage });
  };

  render() {
    const { stage } = this.state;
    const shareUrl = "https://www.eticaargumentativa.com";
    const title =
      "Você conhece a ética argumentativa? Entra aqui e descubra! #éticaArgumentativa";

    return (
      <div className="app">
        {stage === 0 && (
          <div className="stage">
            <div className="question">
              Toda afirmação só pode ser demonstrada como verdadeira ou falsa
              através de uma argumentação?
            </div>
            <img
              src="/img/argumentacao.gif"
              alt="Toda afirmação só pode ser demonstrada como verdadeira ou falsa
              através de uma argumentação?"
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(2)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sim
              </Button>
              <Button
                onClick={this.handleChangeStage(1)}
                variant="contained"
                className="button"
                color="secondary"
              >
                Não
              </Button>
            </div>
          </div>
        )}
        {stage === 1 && (
          <div className="stage">
            <div className="question">
              Você está tentando demonstrar que isso é falso a partir de uma
              argumentação?
            </div>
            <img
              src="/img/argumentacao2.gif"
              alt="Você está tentando demonstrar que isso é falso a partir de uma
              argumentação?"
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(2)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sim
              </Button>
              <Button
                onClick={this.handleChangeStage(0)}
                variant="contained"
                className="button"
                color="secondary"
              >
                Não
              </Button>
            </div>
          </div>
        )}
        {stage === 2 && (
          <div className="stage">
            <div className="question">
              Argumentação exige o controle sobre o próprio corpo?
            </div>
            <img
              src="/img/controlarcorpo.gif"
              alt="Argumentação exige o constrole sobre o próprio corpo?"
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(4)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sim
              </Button>
              <Button
                onClick={this.handleChangeStage(3)}
                variant="contained"
                className="button"
                color="secondary"
              >
                Não
              </Button>
            </div>
          </div>
        )}
        {stage === 3 && (
          <div className="stage">
            <div className="question">Você está controlando seu corpo?</div>
            <img
              src="/img/doida.gif"
              alt="Você está controlando seu corpo?"
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(2)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sim
              </Button>
              <Button
                onClick={this.handleChangeStage(14)}
                variant="contained"
                className="button"
                color="secondary"
              >
                Não
              </Button>
            </div>
          </div>
        )}
        {stage === 14 && (
          <div className="stage">
            <div className="question">
              Você acabou de clicar no botão mouse?
            </div>
            <img
              src="/img/crazy.gif"
              alt="Você acabou de clicar no botão mouse?"
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(3)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sim
              </Button>
            </div>
          </div>
        )}
        {stage === 4 && (
          <div className="stage">
            <div className="question">
              Logo, todos os indivíduos envolvidos na argumentação devem poder
              controlar seus corpos (possuir autonomia)?
            </div>
            <img
              src="/img/controlarcorpo2.gif"
              alt="Logo, todos os indivíduos envolvidos na argumentação devem poder
              controlar seus corpos (possuir autonomia)?"
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(7)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sim
              </Button>
              <Button
                onClick={this.handleChangeStage(5)}
                variant="contained"
                className="button"
                color="secondary"
              >
                Não
              </Button>
            </div>
          </div>
        )}
        {stage === 5 && (
          <div className="stage">
            <div className="question">
              Você argumenta com pedras, objetos, plantas, animais, etc?
            </div>
            <img
              src="/img/animais.gif"
              alt="Você argumenta com pedras, objetos, plantas, animais, etc?"
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(6)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sim
              </Button>
              <Button
                onClick={this.handleChangeStage(4)}
                variant="contained"
                className="button"
                color="secondary"
              >
                Não
              </Button>
            </div>
          </div>
        )}
        {stage === 6 && (
          <div className="stage">
            <div className="question">Consulte um psiquiatra.</div>
            <img
              src="/img/psiquiatra.gif"
              alt="Consulte um psiquiatra."
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(0)}
                variant="contained"
                className="button"
                color="primary"
              >
                Voltar ao início depois de tomar seus remédios.
              </Button>
            </div>
          </div>
        )}
        {stage === 7 && (
          <div className="stage">
            <div className="question">
              Autopropriedade: direito de controle exclusivo sobre o próprio
              corpo. Ninguém pode usar seu corpo contra sua vontade.
            </div>
            <img
              src="/img/body2.gif"
              alt="Autopropriedade: direito de controle exclusivo sobre o próprio
              corpo. Ninguém pode usar seu corpo contra sua vontade."
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(8)}
                variant="contained"
                className="button"
                color="primary"
              >
                hmmm, continue...
              </Button>
            </div>
          </div>
        )}
        {stage === 8 && (
          <div className="stage">
            <div className="question">
              O primeiro usuário de um objeto físico tem direito de controle
              exclusivo sobre ele?
            </div>
            <img
              src="/img/controleexclusivo.gif"
              alt="O primeiro usuário de um objeto físico tem direito de controle
              exclusivo sobre ele?"
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(11)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sim
              </Button>
              <Button
                onClick={this.handleChangeStage(9)}
                variant="contained"
                className="button"
                color="secondary"
              >
                Não
              </Button>
            </div>
          </div>
        )}
        {stage === 9 && (
          <div className="stage">
            <div className="question">
              Então seria válido utilizar um objeto físico que já está sendo
              utilizado por alguém contra a vontade desta pessoa?
            </div>
            <img
              src="/img/theft.gif"
              alt="Então seria válido utilizar um objeto físico que já está sendo
              utilizado por alguém contra a vontade desta pessoa?"
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(10)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sim
              </Button>
              <Button
                onClick={this.handleChangeStage(8)}
                variant="contained"
                className="button"
                color="secondary"
              >
                Não
              </Button>
            </div>
          </div>
        )}
        {stage === 10 && (
          <div className="stage">
            <div className="question">
              Seu corpo é um objeto físico e você o usa.
            </div>
            <img
              src="/img/body.gif"
              alt="Seu corpo é um objeto físico e você o usa."
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(7)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sim, óbvio!
              </Button>
            </div>
          </div>
        )}

        {stage === 11 && (
          <div className="stage">
            <div className="question">
              Propriedade privada: direito de controle exclusivo por parte de um
              indivíduo sobre um determinado objeto físico...
            </div>
            <img
              src="/img/private.gif"
              alt="Propriedade privada: direito de controle exclusivo por parte de um
              indivíduo sobre um determinado objeto físico"
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(12)}
                variant="contained"
                className="button"
                color="primary"
              >
                hmmm, continue...
              </Button>
            </div>
          </div>
        )}

        {stage === 12 && (
          <div className="stage">
            <div className="question">
              Este é o único princípio ético correto. Qualquer ética que negue a
              propriedade privada é injustificável?
            </div>

            <img
              src="/img/ethics.gif"
              alt="Este é o único princípio ético correto. Qualquer ética que negue a
              propriedade privada é injustificável?"
              className="image"
            />
            <div className="buttons">
              <Button
                onClick={this.handleChangeStage(13)}
                variant="contained"
                className="button"
                color="primary"
              >
                Sim
              </Button>
              <Button
                onClick={this.handleChangeStage(0)}
                variant="contained"
                className="button"
                color="secondary"
              >
                Não
              </Button>
            </div>
          </div>
        )}
        {stage === 13 && (
          <div className="stage">
            <div className="question">Você é um libertário.</div>
            <div className="video">
              <iframe
                title="Ética Argumentativa"
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/PpDBAGqQwoA"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>

            <div className="ads">
              <a
                href="https://loja.ideiasradicais.com.br/camiseta-ideias-radicais-imposto-e-roubo-preta"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="/img/camisetaideiasradicais.png" />
              </a>
            </div>

            <div className="share-title">Compartilhe com seus amigos!</div>
            <div className="share-buttons">
              <div className="social">
                <FacebookShareButton
                  url={shareUrl}
                  quote={title}
                  className="social-button"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </div>

              <div className="social">
                <TwitterShareButton
                  url={shareUrl}
                  title={title}
                  className="social-button"
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </div>
              <div className="social">
                <RedditShareButton
                  url={shareUrl}
                  title={title}
                  windowWidth={660}
                  windowHeight={460}
                  className="social-button"
                >
                  <RedditIcon size={32} round />
                </RedditShareButton>
              </div>
              <div className="social">
                <TelegramShareButton
                  url={shareUrl}
                  title={title}
                  className="social-button"
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
              </div>

              <div className="social">
                <WhatsappShareButton
                  url={shareUrl}
                  title={title}
                  separator=":: "
                  className="social-button"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://www.impostoeroubo.com/libertarios/"
                className="navlink"
              >
                <Button variant="contained" className="button" color="primary">
                  Canais libertários
                </Button>
              </a>
              <Button
                onClick={this.handleChangeStage(0)}
                variant="contained"
                className="button"
                color="secondary"
              >
                Voltar ao início
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
