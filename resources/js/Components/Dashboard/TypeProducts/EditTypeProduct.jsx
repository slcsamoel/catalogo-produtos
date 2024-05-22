import { useForm } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'

export  default function EditTypeProduct({close , model}){
    const {data, setData, put, reset, errors} = useForm({ type: model.type, descricao: model.descricao , status: model.status });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        put(route('typeProduct.update', model.id), {
            data,
            onSuccess: () => {
                reset(),
                close()
            },
        });
    }

    useEffect(() => {
        setData({...data,
            type: model.type, descricao: model.descricao , status: model.status
        });
    }, [model]);

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="type" className="col-form-label">Tipo:</label>
                            <input type="text" className="form-control" name='type' value={data.type} onChange={onChange} id="type"/>
                            {errors && <div className='text-danger mt-1'>{errors.type}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao" className="col-form-label">Descricao:</label>
                            <input type="text" className="form-control" name='descricao' value={data.descricao} onChange={onChange} id="descricao"/>
                            {errors && <div className='text-danger mt-1'>{errors.descricao}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="col-form-label">Status:</label>
                            <select id="status" value={data.status} onChange={onChange} className="form-control">
                                <option value={1}>Ativo</option>
                                <option value={0}>Inativo</option>
                            </select>
                            {errors && <div className='text-danger mt-1'>{errors.status}</div>}
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn bg-gradient-primary">Save</button>
                </div>
            </form>
        </>

    )
}
