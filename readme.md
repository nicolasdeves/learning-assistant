# Learning Assistant

Projeto mobile realizado na faculdade. Tem como objetivo integrar o aprendizado com o uso de inteligência artificial, promover o ensino de qualquer assunto e juntar pessoas que estão em busco de um conhecimento comum!

Este repositório contém a estrutura Backend e Mobile do projeto **Learning Assistant**, utilizando **NestJS**, **Prisma**, **React Native** e integrações com modelos de IA **Gemini**.  
Os comandos abaixo detalham exatamente pra que serve cada etapa do fluxo de desenvolvimento.

---

## 🛠️ Backend

### Comandos do Prisma e Servidor

Dentro do projeto *backend*

| Comando | Descrição técnica |
|--------|--------------------|
| **npm run start**                                  | Inicia o servidor NestJS em modo de desenvolvimento. |
| **npx prisma generate**                            | Gera o Prisma Client com base no arquivo `schema.prisma`. Necessário após alterações no schema. |
| **npx prisma migrate dev**                         | Cria e aplica migrações no ambiente de desenvolvimento, atualizando a estrutura do banco. |
| **npx prisma migrate dev --name <migration_name>** | Executa uma migração nomeada, permitindo versionamento mais claro das alterações de schema. |
| **npx prisma db seed**                             | Executa o script de seed configurado para popular o banco com dados iniciais. |
| **npx prisma migrate reset**                       | Reseta completamente o banco: remove tabelas, recria, reaplica migrações e roda o seed. Ideal para ambiente local. |

---

## 📱 Mobile

### Comandos para build, cache e execução

Dentro do projeto *mobile*

| Comando | Descrição técnica |
|--------|--------------------|
| **npm start**                            | Inicia o Metro Bundler do React Native. É o responsável por compilar e servir o código JS para o app. |
| **npm run android**                      | Builda e instala a aplicação Android automaticamente no dispositivo/emulador conectado. |
| **npx react-native start --reset-cache** | Reinicia o Metro Bundler limpando o cache, útil para resolver inconsistências de build. |
| **./gradlew clean**                      | Remove arquivos temporários e build cache no projeto Android (`android/`). Indicado quando o Gradle apresenta erros. |

---

## 📲 Execução em dispositivo físico (Android)

Dentro do projeto *mobile*

| Comando | Descrição técnica |
|--------|--------------------|
| **adb devices**                                  | Lista dispositivos conectados via ADB. É importante que apenas o celular esteja listado se o objetivo é rodar nele. |
| **npx react-native run-android --deviceId <ID>** | Instala e executa o app diretamente no dispositivo Android especificado. |

Exemplo:

`npx react-native run-android --deviceId RX8M7135Q2B`

