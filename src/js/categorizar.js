const portfolio = [
    // --- Categoria: Infantil ---
    {
        id: 1,
        categoria: 'infantil',
        img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80'
    },
    {
        id: 2,
        categoria: 'infantil',
        img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&q=80'
    },
    {
        id: 3,
        categoria: 'infantil',
        img: 'https://images.unsplash.com/photo-1519340241574-2291ecbc106f?w=500&q=80'
    },
    {
        id: 4,
        categoria: 'infantil',
        img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&q=80'
    },
    {
        id: 5,
        categoria: 'infantil',
        img: 'https://images.unsplash.com/photo-1602052852552-8758833945df?w=500&q=80'
    },

    // --- Categoria: Aniversários ---
    {
        id: 6,
        categoria: 'aniversarios',
        img: 'https://images.unsplash.com/photo-1530103862676-de3c9a59af57?w=500&q=80'
    },
    {
        id: 7,
        categoria: 'aniversarios',
        img: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=500&q=80'
    },
    {
        id: 8,
        categoria: 'aniversarios',
        img: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=500&q=80'
    },
    {
        id: 9,
        categoria: 'aniversarios',
        img: 'https://images.unsplash.com/photo-1527481138388-318cd7a10d46?w=500&q=80'
    },
    {
        id: 10,
        categoria: 'aniversarios',
        img: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?w=500&q=80'
    },

    // --- Categoria: Casamento (Adicionado para variedade) ---
    {
        id: 11,
        categoria: 'casamento',
        img: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?w=500&q=80'
    },
    {
        id: 12,
        categoria: 'casamento',
        img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80'
    },
    {
        id: 13,
        categoria: 'casamento',
        img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500&q=80'
    },
    {
        id: 14,
        categoria: 'casamento',
        img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&q=80'
    },
    {
        id: 15,
        categoria: 'casamento',
        img: 'https://images.unsplash.com/photo-1525413359052-a0e285d852da?w=500&q=80'
    },

    // --- Categoria: Ensaio/Retrato ---
    {
        id: 16,
        categoria: 'ensaio',
        img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80'
    },
    {
        id: 17,
        categoria: 'ensaio',
        img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80'
    },
    {
        id: 18,
        categoria: 'ensaio',
        img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80'
    },
    {
        id: 19,
        categoria: 'ensaio',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80'
    },
    {
        id: 20,
        categoria: 'ensaio',
        img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&q=80'
    }
];

const botoes = document.querySelectorAll('.filtro-btn')
const galeria = document.querySelector('.gallery-container')
const modal = document.getElementById('visualizador-modal')
const imgAmpliada = document.getElementById('img-ampliada')
const fecharModal = document.querySelector('.fechar-modal')


function filtrarFotos(tag) {

    return portfolio.filter(foto => foto.categoria === tag)

}


function mostrarFotos(fotos) {
    limparGaleria()
    if (modal) {
        fecharModal.addEventListener('click', () => {
            modal.style.display = 'none'
            imgAmpliada.src = ''
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none'
                imgAmpliada.src = ''
            }
        })

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                modal.style.display = 'none'
                imgAmpliada.src = ''
            }
        })
    }
    fotos.forEach(foto => {
        const img = document.createElement('img')
        img.addEventListener('click', () => {
            modal.style.display = 'flex'
            imgAmpliada.src = foto.img
        })
        img.src = foto.img
        img.alt = `Foto da categoria ${foto.categoria}`
        galeria.appendChild(img)
    })

}


window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none'
        imgAmpliada.src = ''
    }
})

function limparGaleria() {
    galeria.innerHTML = ''
}

botoes.forEach(btn => {
    btn.addEventListener('click', (e) => {
        botoes.forEach(botao => botao.classList.remove('active'))
        btn.classList.add('active');
        const categoria = btn.textContent.toLowerCase();
        if (categoria === 'home') {
            window.location.href = 'portifolio.html'
        } else if (categoria === 'sobre') {
            window.location.href = 'sobre.html'
        } else if (categoria === 'contato') {
            window.location.href = 'contato.html'
        } else {
            if (galeria) {

                mostrarFotos(filtrarFotos(categoria));
            } else {
                window.location.href = 'portifolio.html' + '?categoria=' + categoria;
            }
        }
    })
})

const params = new URLSearchParams(window.location.search);
const categoriaSolicitada = params.get('categoria');

if (categoriaSolicitada === null) {

    mostrarFotos(portfolio)

} else {

    mostrarFotos(filtrarFotos(categoriaSolicitada))

}

