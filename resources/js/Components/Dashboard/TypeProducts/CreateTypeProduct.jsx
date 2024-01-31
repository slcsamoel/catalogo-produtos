import { useForm } from '@inertiajs/inertia-react'
import React from 'react'

export  default function CreateTypeProduct({close}){
    const {data, setData, post, reset, errors} = useForm({ type: '', descricao: '', status: 1 });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('typeProduct.store'), {
            data,
            onSuccess: () => {
                reset(),
                close()
            },
        });
    }

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
