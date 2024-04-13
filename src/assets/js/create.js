import { useState } from 'react';

function createFormData() {
    const [name, setName] = useState('');
    const [ordem, setOrdem] = useState('');
    const [descricao, setDescricao] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [nivelimportancia, setNivelImportancia] = useState('Tranquilo');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        } else if (name === "ordem") {
            setOrdem(value);
        } else if (name === "descricao") {
            setDescricao(value);
        }
    };

    const handleChangeNivelImportancia = (e) => {
        setNivelImportancia(e.target.value);
    }

    const handleCadastro = async () => {
        try {
            const url = 'http://localhost:8181/api/salvar';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    ordem: ordem,
                    descricao: descricao,
                    nivelimportancia: nivelimportancia
                })
            });
            if (response.ok) {
                setShowSuccessMessage(true);
                setName('');
                setOrdem('');
                setDescricao('');
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 5000);
            } else {
                throw new Error(response.statusText);
            }
        } catch (error) {
            console.error('Erro durante o cadastro:', error);
            alert('Erro durante o cadastro. Por favor, tente novamente.');
        }
    }

    return {
        name,
        ordem,
        descricao,
        showSuccessMessage,
        nivelimportancia,
        handleChange,
        handleChangeNivelImportancia,
        handleCadastro,
        setShowSuccessMessage
    };
}

export default createFormData;
