// Inicializar Ícones (Lucide)
lucide.createIcons();

// Animação de Scroll Suave para a Navbar e Fade-in
document.addEventListener("DOMContentLoaded", () => {
    const serviceDialog = document.getElementById("serviceDialog");
    const serviceDialogTitle = document.getElementById("serviceDialogTitle");
    const serviceDialogDescription = document.getElementById("serviceDialogDescription");
    const serviceDialogDetails = document.getElementById("serviceDialogDetails");
    const closeServiceDialog = serviceDialog?.querySelector(".dialog-close");
    const services = {
        programacao: {
            title: "Programação",
            description: "Tecnologia sob medida para transformar processos e ideias em soluções digitais eficientes.",
            details: [
                "Desenvolvimento de sites e aplicações web responsivas.",
                "Automação de tarefas e processos do dia a dia.",
                "Chatbots e integrações para melhorar o atendimento.",
                "Arquiteturas de software preparadas para crescer."
            ]
        },
        psicologia: {
            title: "Psicologia",
            description: "Cuidado e desenvolvimento humano com atenção às necessidades individuais e aos desafios das organizações.",
            details: [
                "Acompanhamento e acolhimento psicológico clínico.",
                "Psicologia organizacional e apoio às equipes.",
                "Consultoria para bem-estar e desenvolvimento no trabalho.",
                "Estratégias para relações e ambientes mais saudáveis."
            ]
        },
        marketing: {
            title: "Marketing",
            description: "Estratégias para fortalecer marcas, alcançar o público certo e apoiar resultados de negócio.",
            details: [
                "Posicionamento e estratégia de marca.",
                "Planejamento e gestão de campanhas de tráfego.",
                "Otimização para mecanismos de busca (SEO).",
                "Análise de dados para orientar decisões e melhorias."
            ]
        }
    };

    document.querySelectorAll(".card[data-service]").forEach(card => {
        card.addEventListener("click", () => {
            const service = services[card.dataset.service];
            if (!service || !serviceDialog || !serviceDialogTitle || !serviceDialogDescription || !serviceDialogDetails) {
                return;
            }

            serviceDialogTitle.textContent = service.title;
            serviceDialogDescription.textContent = service.description;
            serviceDialogDetails.replaceChildren(
                ...service.details.map(detail => {
                    const item = document.createElement("li");
                    item.textContent = detail;
                    return item;
                })
            );
            serviceDialog.showModal();
        });
    });

    closeServiceDialog?.addEventListener("click", () => serviceDialog?.close());
    serviceDialog?.addEventListener("click", event => {
        if (event.target === serviceDialog) {
            serviceDialog.close();
        }
    });

    // Adicionar classe aos inputs preenchidos para manter o label no topo
    const inputs = document.querySelectorAll('.input-group input, .input-group textarea');
    
    inputs.forEach(input => {
        // Verifica no carregamento (caso haja auto-fill do navegador)
        if(input.value.trim() !== "") {
            input.classList.add("has-value");
        }
        
        // Verifica durante a digitação
        input.addEventListener('blur', () => {
            if(input.value.trim() !== "") {
                input.classList.add("has-value");
            } else {
                input.classList.remove("has-value");
            }
        });
    });

    // Intercepta o Form para não recarregar a página no Submit
    const form = document.getElementById("contactForm");
    if(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const btn = form.querySelector("button");
            const originalText = btn.innerText;
            btn.innerText = "Enviando...";
            btn.style.background = "var(--gold)";
            btn.style.color = "var(--bg-main)";
            
            setTimeout(() => {
                btn.innerText = "Mensagem Enviada!";
                form.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = "transparent";
                    btn.style.color = "var(--gold)";
                }, 3000);
            }, 1500);
        });
    }
});
