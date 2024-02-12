import React from "react";

export default class FormElement extends React.Component{
    state = {
        nama:'',
        jurusan:'',
        gender:'',
        alamat:'',
        member:''
    }

    handleSubmit = (e) => {
        e.preventDefault();//biar tidak refresh
        alert(`
        nama: ${this.state.nama}
        jurusan: ${this.state.jurusan}
        gender: ${this.state.gender}
        alamat: ${this.state.alamat}
        member: ${this.state.member ? 'YES' : 'NO'}
        `);

        this.setState({
            nama:'',
            jurusan:'',
            gender:'',
            alamat:'',
            member:''
        })
    }

    render(){

        return (
            <div style={{margin:'100px auto', border:'1px solid grey', padding:'20px'}}>
                <form onSubmit={this.handleSubmit}>
                    <label >
                        Nama : <input 
                        type="text" 
                        name="nama" 
                        onChange={e => this.setState({nama:e.target.value})}
                        defaultValue={this.state.nama}
                        />
                    </label>
                    <br />
                    <label htmlFor="">
                        Jurusan : <select name="jurusan" onChange={e => this.setState({jurusan:e.target.value})}>
                            <option value="Pilih Jurusan">Pilih Jurusan</option>
                            <option value="Teknik informatika">Teknik informatika</option>
                            <option value="Sistem Informasi">Sistem Informasi</option>
                            <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
                        </select>
                    </label>
                    <br />
                    <label htmlFor="">
                        Jenis Kelamin :
                        <input type="radio"  value="Laki-laki" name="gender" onChange={e => this.setState({gender:e.target.value})}/>Laki-laki
                        <input type="radio"  value="Perempuan" name="gender" onChange={e => this.setState({gender:e.target.value})}/>Perempuan
                    </label>
                    <br />
                    <label htmlFor="">
                        Alamat : <textarea name="alamat" id="" cols="30" rows="10" onChange={e => this.setState({alamat:e.target.value})} value={this.state.alamat}></textarea>
                    </label>
                    <br />
                    <label htmlFor="">
                        Member : <input type="checkbox" name="member" checked={this.state.member} onChange={e => this.setState({member:e.target.checked})}/>
                    </label>
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}