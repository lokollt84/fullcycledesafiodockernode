FROM node:16

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000
COPY . .

# para igualar o usuario da maquina com o do container e nao dar erro de permissao
# desde que o id do usuario seja o mesmo que a do usuario do container (veja espec da imagem no hub)
USER root
RUN chmod 777 commands.sh
RUN ["chmod", "+x", "commands.sh"]

#RUN npm update package.json
#CMD [ "npm" , "i" , "-f" , "package.json"]
