# Usa a imagem oficial do Node.js
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas o package.json e o package-lock.json para instalar as dependências primeiro
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta 3001 para acesso externo
EXPOSE 3001

# Comando para rodar o NestJS no modo desenvolvimento
CMD ["npm", "run", "start:dev"]
