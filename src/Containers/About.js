import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

class Donation extends Component {
  render() {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className="content content-small avatars"
      >
        <Grid item className="avatar-container" xs={12}>
          <h1>Por que esse site existe?</h1>
          <div className="text-justify">
            <p>
              Se você já encontrou algum libertário já se deparou com essa
              pergunta: o que é ética argumentativa?
            </p>
            <p>
              Para te ajudar com a resposta, desenvolvi esse site como forma de
              disseminar a ideia.
            </p>
            <p>
              Sempre de bate-papo no{" "}
              <a
                href="https://discord.gg/5kQFs9R"
                rel="noopener noreferrer"
                target="_blank"
              >
                Discord da Cultura Libertária
              </a>
              , decidi fazer esse site baseado no diagrama que o{" "}
              <a
                href="https://twitter.com/Sokath_42"
                rel="noopener noreferrer"
                target="_blank"
              >
                @Sokath
              </a>
              {", "} gentilmente, me enviou:
            </p>
            <div className="align-center">
              <img
                src="/img/diagrama.jpg"
                alt="Fiagrama - Imposto é roubo?"
                className="image"
              />
            </div>
            <p>
              A partir daí foi só arregaçar as mangas e colocar a ideia em
              prática!
            </p>
          </div>
        </Grid>
        <Grid item className="avatar-container" xs={12}>
          <h2>Faça uma doação agora!</h2>
          <p>Doe Bitcoins para ajudar a manter o site online:</p>
          <img
            src="/img/donation.png"
            alt="Doe Bitcoins"
            className="image image-small"
          />
          <p>18kXMmrDtgfeQgVmwfmygTaYLyQuVS4chK</p>
        </Grid>
        <Grid item className="avatar-container" xs={12}>
          <h2>Quem desenvolveu o site?</h2>
          <a
            href="https://www.miguelmedeiros.com.br/"
            rel="noopener noreferrer"
            target="_blank"
            className="navlink"
          >
            <Avatar
              alt="Remy Sharp"
              src="/img/miguelmedeiros.jpg"
              className="avatar-image"
            />
            <div className="name">Miguel Medeiros</div>
            <div className="description">Desenvolvedor Full-stack</div>
          </a>
        </Grid>
      </Grid>
    );
  }
}

export default Donation;
