# Roteiro — MSA e Microsoft Fabric: tecnologia e comunidade

TIES Day #07, 15/08/2026, slot 10:30–11:10 (40 min): 25 min de conteúdo + 5 min de demo ao vivo + 10 min de folga (perguntas/transição)

Acompanha o site em `index.html` (25 slides). Os números de slide abaixo batem com a ordem do deck.

## Fontes (revisar 1-2 dias antes do evento, benefícios de programa mudam)
- https://mvp.microsoft.com/studentambassadors
- [A new chapter for the Microsoft Student Ambassadors program](https://techcommunity.microsoft.com/blog/skills-hub-blog/a-new-chapter-for-the-microsoft-student-ambassadors-program-built-for-you/4508104)
- [How to Stand Out as a Microsoft Student Ambassador: Perks, Process, and More](https://techcommunity.microsoft.com/t5/educator-developer-blog/how-to-stand-out-as-a-microsoft-student-ambassador-perks-process/ba-p/4232299)
- Página oficial do FAQ (MVP Communities) para requisitos de idade e critérios de qualificação

Dados-chave confirmados: cadastro gratuito, sem processo seletivo, sem entrevista. Requisitos: 18 anos ou mais, matrícula em instituição de ensino superior credenciada, conta Azure for Students, não ser funcionário/contratado Microsoft. Pra virar Ambassador reconhecido (não só cadastrado): 1 certificação Microsoft ou Applied Skills tirada/renovada nos últimos 12 meses, mais uma de duas trilhas (250 visitantes no Contributor ID, ou 1.000 conclusões de módulo via Learn Plan). Benefícios: Microsoft 365 Copilot, Visual Studio Enterprise, **US$150/mês em créditos Azure**, LinkedIn Learning, vouchers de certificação, swag, caminho até nomeação MVP. Exemplos de custo real na Azure: VM B2s de teste ~US$30/mês, Azure SQL Database nível Basic ~US$5/mês, Microsoft Foundry cobra por uso.

---

## Abertura (3 min) — slides 1 a 3
- Slide 1 (título): gancho de 1 frase, o que a plateia vai levar da palestra
- Slide 2 (sobre mim): quem é você, cargo, MSA Associate, 13 certificações
- Slide 3 (agenda): os 3 blocos que vêm a seguir
- Pergunta de sondagem pra plateia: "quem aqui já ouviu falar do MSA?" / "quem já mexeu com Azure ou Fabric?", calibra o nível ao vivo

## Bloco 1 — O que é o MSA (5 min) — slides 4 a 6
- Programa global da Microsoft para estudantes de ensino superior, mantido diretamente pela empresa
- Reformulado em 2026: saiu do foco só em devs, hoje é pra qualquer curso/área
- Gratuito, sem processo seletivo, sem entrevista

## Bloco 2 — Como entrar e evoluir (5 min) — slides 7 a 10
- Requisitos: 18+, matriculado em instituição credenciada, conta Azure for Students, não ser funcionário/contratado Microsoft
- Como entrar tem duas camadas: cadastro é livre e instantâneo, mas virar Ambassador reconhecido (o que libera os benefícios) pede 1 certificação recente + uma das duas trilhas (250 visitantes ou 1.000 módulos). QR code na tela aponta direto pro cadastro
- Evoluir pra Senior: 1+ ano ativo, sem previsão de formar em 6 meses, requisitos cumpridos, perfil completo. Nomeação avaliada 2x por ano

## Bloco 3 — Benefícios (7 min) ⭐ bloco central — slides 11 a 16
- Panorama geral: M365 Copilot, Visual Studio Enterprise, LinkedIn Learning, vouchers de certificação, swag
- Destaque repetido: **US$150 em créditos Azure por mês**, recorrente enquanto for estudante ativo
- Slide de comparação: dar exemplos concretos e variados do que cabe dentro dos US$150 (uma VM de teste B2s por ~US$30/mês, um banco Azure SQL Basic por ~US$5/mês, chamadas de IA no Microsoft Foundry cobradas por uso). Usar pra tirar o crédito do abstrato, sem prometer que cobre qualquer coisa
- Pra que serve: montar workspace de Fabric, testar pipeline, subir POC, treinar modelo, explorar IA generativa no Microsoft Foundry
- Slide de arquitetura de referência (fontes de dados → Fabric Lakehouse/OneLake → consumo em Power BI/notebook/IA), mostrar que cabe tudo dentro do crédito, sem infraestrutura própria

## Bloco 4 — Carreira em dados (4 min) — slides 17 a 21
- Portfólio real: cada POC vira case documentado no GitHub e post no LinkedIn
- Certificações abrem portas: DP-750 e DP-700 (Fabric), AZ-900/DP-900/AI-900 (fundamentos Azure). Nem sempre tem voucher disponível, o ponto é que praticar de verdade com o crédito ajuda muito mais a passar na prova do que só decorar teoria
- Comunidade: contato direto com MVPs e outros embaixadores, como os que estão aqui no TIES Day
- Caminho MSA → Comunidade ativa → Nomeação MVP: não é um fim, oportunidades continuam depois da faculdade

## Demo ao vivo (5 min) — slide 23
- Preparar antes do evento: ambiente logado, fallback pronto caso a internet falhe
- Azure Portal: onde ver o crédito de estudante disponível, como criar um recurso do zero
- Se der tempo, abrir também o Fabric (Lakehouse/OneLake) fora do slide, direto no navegador
- Mensagem central: "dá pra fazer isso hoje, com o crédito do MSA, não é abstrato"

## Fechamento (1 min) — slides 24 e 25
- Recap em 4 cards: o que é, como entrar, como se manter, o que ganha
- QR codes de LinkedIn e YouTube na tela, convite pra continuar a conversa

## Folga (10 min do slot)
- Perguntas da plateia

---

## Verificação
- Fazer um ensaio cronometrado pra validar se os 25+5 min batem com o ritmo real de fala
- Confirmar de novo os números de requisitos (18 anos, 250/1.000, 12 meses) e os preços de VM/Azure SQL/Foundry no Azure Pricing Calculator 1-2 dias antes do evento
