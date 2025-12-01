// Dados dos projetos
const projectsData = {
    projeto1: {
        title: "Sistema de Automação Comercial",
        description: "Sistema completo para automação de processos comerciais, desenvolvido com Python, Django e PostgreSQL. Implementa controle de estoque, vendas e relatórios automatizados.",
        longDescription: "Este sistema foi desenvolvido para uma empresa de varejo que precisava modernizar seus processos manuais. A solução inclui módulos para controle de estoque em tempo real, sistema de vendas com múltiplas formas de pagamento, emissão de notas fiscais eletrônicas e relatórios gerenciais automatizados. O sistema reduziu o tempo de processamento de pedidos em 70% e eliminou erros manuais no controle de estoque.",
        technologies: ["Python", "Django", "PostgreSQL", "Django REST Framework", "Celery", "Redis"],
        features: [
            "Controle de estoque em tempo real",
            "Sistema de vendas integrado",
            "Relatórios gerenciais automatizados",
            "Integração com gateways de pagamento",
            "API RESTful para integração com outros sistemas"
        ],
        image: "fa-server"
    },
    projeto2: {
        title: "Bot para Automação de Tarefas",
        description: "Robô desenvolvido em Python para automatizar tarefas repetitivas como extração de dados, preenchimento de formulários e envio de relatórios por e-mail.",
        longDescription: "Este bot foi desenvolvido para automatizar processos repetitivos em uma empresa de logística. Ele é capaz de acessar sistemas web, extrair dados de planilhas, preencher formulários automaticamente e enviar relatórios por e-mail em horários programados. A solução economizou aproximadamente 20 horas de trabalho manual por semana e reduziu erros em processos críticos.",
        technologies: ["Python", "Selenium", "Pandas", "OpenPyXL", "SMTPLib", "Schedule"],
        features: [
            "Automação de navegação web",
            "Extração e processamento de dados",
            "Preenchimento automático de formulários",
            "Agendamento de tarefas",
            "Envio automático de e-mails"
        ],
        image: "fa-robot"
    },
    projeto3: {
        title: "API para Análise de Dados",
        description: "API RESTful desenvolvida com Node.js e Express para processamento e análise de grandes volumes de dados, com integração a serviços cloud.",
        longDescription: "Esta API foi desenvolvida para uma startup de análise de dados que precisava processar grandes volumes de informações de diferentes fontes. A solução permite ingestão de dados, processamento em tempo real, análise preditiva e visualização através de endpoints RESTful. A API é escalável e foi projetada para lidar com picos de tráfego durante eventos específicos.",
        technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "AWS Lambda"],
        features: [
            "Ingestão de dados de múltiplas fontes",
            "Processamento em tempo real",
            "Análise preditiva com machine learning",
            "Autenticação JWT",
            "Escalabilidade automática na nuvem"
        ],
        image: "fa-chart-line"
    }
};

// Função para abrir modal com detalhes do projeto
function openProjectDetails(projectId) {
    const project = projectsData[projectId];
    
    if (!project) return;
    
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <div class="modal-project-image">
            <i class="fas ${project.image}"></i>
        </div>
        <p><strong>Descrição detalhada:</strong> ${project.longDescription}</p>
        
        <h3>Tecnologias utilizadas:</h3>
        <div class="modal-tech-tags">
            ${project.technologies.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
        </div>
        
        <h3>Principais funcionalidades:</h3>
        <ul>
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
    `;
    
    document.getElementById('projectModal').style.display = 'block';
}

// Função para fechar modal
function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Função para enviar formulário de contato
function submitContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validação simples
    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Simulação de envio
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Em breve entrarei em contato.`);
    
    // Limpar formulário
    document.getElementById('contactForm').reset();
}

// Função para rolar suavemente para as seções
function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// Função para voltar ao topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Função para mostrar/ocultar botão de voltar ao topo
function toggleBackToTopButton() {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'inline-flex';
    } else {
        backToTopButton.style.display = 'none';
    }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Configurar eventos de clique nos links do menu
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScrollTo(targetId);
        });
    });
    
    // Configurar formulário de contato
    document.getElementById('contactForm').addEventListener('submit', submitContactForm);
    
    // Configurar botão de voltar ao topo
    document.getElementById('backToTop').addEventListener('click', scrollToTop);
    
    // Configurar botão de fechar modal
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    
    // Fechar modal ao clicar fora dele
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('projectModal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Mostrar/ocultar botão de voltar ao topo ao rolar
    window.addEventListener('scroll', toggleBackToTopButton);
    
    // Inicializar botão de voltar ao topo como oculto
    document.getElementById('backToTop').style.display = 'none';
    
    // Adicionar estilos para elementos do modal
    const style = document.createElement('style');
    style.textContent = `
        .modal-project-image {
            width: 100%;
            height: 200px;
            background-color: var(--cor-destaque-azul);
            border-radius: 4px;
            margin: 15px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--cor-texto-principal);
            font-size: 3em;
        }
        
        .modal-tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 15px 0;
        }
        
        .modal-tech-tag {
            background-color: var(--cor-destaque-azul);
            color: white;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 0.8em;
        }
        
        .modal-content ul {
            padding-left: 20px;
        }
        
        .modal-content li {
            margin-bottom: 8px;
        }
    `;
    document.head.appendChild(style);
});