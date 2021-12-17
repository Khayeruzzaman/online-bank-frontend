import React from 'react';
import styles from '../Dashboard/dashboard.module.css';

const MyTransections = () => {
    return(
        <div className={styles.flexContainerDash}>
            <div className={styles.flexItemDash} style={{ width: '85%', marginLeft:'150px' }}>
                <table id="transactions" className="table table-hover">
                    <tr>
                        <th>Date & Time (+6.00)<a href="/account/my-transections/historydate"><div><i className="fas fa-sort" style={{ fontSize: '20px', justifyContent:'right' }}></i></div></a></th>
                        <th>Remarks <a href="/account/my-transections/remarks"><div><i className="fas fa-sort" style={{ fontSize: '20px', justifyContent:'right' }}></i></div></a></th>
                        <th>Debit (TK) <a href="/account/my-transections/debit"><div><i className="fas fa-sort" style={{ fontSize: '20px', justifyContent:'right' }}></i></div></a></th>
                        <th>Credit (TK) <a href="/account/my-transections/credit"><div><i className="fas fa-sort" style={{ fontSize: '20px', justifyContent:'right' }}></i></div></a></th>
                    </tr>
                    {/*@forelse ($history as $h)
                        <tr>
                            <td>{{ $h->created_at }}</td>
                            <td>{{ $h->remarks }}</td>
                            <td>{{ $h->debit }}</td>
                            <td>{{ $h->credit }}</td>
                        </tr>
                    @empty
                        <p id="none"> No results found :(</p>
                        @endforelse*/}
                </table>
            </div>
        </div>
    );
}
export default MyTransections;