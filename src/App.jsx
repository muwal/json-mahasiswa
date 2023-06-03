import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)


    const [ratings, setRatings] = useState({
        aspek_penilaian_1: {
            mahasiswa_1: 1,
            mahasiswa_2: 1,
            mahasiswa_3: 1,
            mahasiswa_4: 1,
            mahasiswa_5: 1,
            mahasiswa_6: 1,
            mahasiswa_7: 1,
            mahasiswa_8: 1,
            mahasiswa_9: 1,
            mahasiswa_10: 1,
        },

        aspek_penilaian_2: {
            mahasiswa_1: 1,
            mahasiswa_2: 1,
            mahasiswa_3: 1,
            mahasiswa_4: 1,
            mahasiswa_5: 1,
            mahasiswa_6: 1,
            mahasiswa_7: 1,
            mahasiswa_8: 1,
            mahasiswa_9: 1,
            mahasiswa_10: 1,
        },

        aspek_penilaian_3: {
            mahasiswa_1: 1,
            mahasiswa_2: 1,
            mahasiswa_3: 1,
            mahasiswa_4: 1,
            mahasiswa_5: 1,
            mahasiswa_6: 1,
            mahasiswa_7: 1,
            mahasiswa_8: 1,
            mahasiswa_9: 1,
            mahasiswa_10: 1,
        },

        aspek_penilaian_4: {
            mahasiswa_1: 1,
            mahasiswa_2: 1,
            mahasiswa_3: 1,
            mahasiswa_4: 1,
            mahasiswa_5: 1,
            mahasiswa_6: 1,
            mahasiswa_7: 1,
            mahasiswa_8: 1,
            mahasiswa_9: 1,
            mahasiswa_10: 1,
        },
    });

    const outputJson = {
        ...ratings,
    };

    const handleRatingChange = (event) => {
        const { name, value } = event.target;
        const [penilaian, student] = name.split('-');

        setRatings((prevRatings) => ({
            ...prevRatings,
            [penilaian]: {
                ...prevRatings[penilaian],
                [student]: Number(value),
            },
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(ratings));
        console.log(ratings);
    };

    return (
        <>
            <main className=''>
                <section>
                    <div className='container mx-auto my-12 justify-center max-w-screen-md'>
                        <form onSubmit={handleSubmit}>

                            <h3 className='flex flex-row text-3xl font-bold mb-3 justify-center'>Aplikasi Penilaian Siswa</h3>
                            <table className="min-w-full text-center text-sm font-light">
                                <thead className="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-4"></th>
                                        <th scope="col" className="px-6 py-4">Aspek Penilaian 1</th>
                                        <th scope="col" className="px-6 py-4">Aspek Penilaian 2</th>
                                        <th scope="col" className="px-6 py-4">Aspek Penilaian 3</th>
                                        <th scope="col" className="px-6 py-4">Aspek Penilaian 4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(ratings.aspek_penilaian_1).map((student) => (
                                        <tr key={student} className="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium capitalize">{student.split('_').join(' ')}</td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <select data-te-select-init data-te-select-clear-button="true" className='rounded w-full px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-gray-500' id={`aspek_penilaian_1-${student}`}
                                                    name={`aspek_penilaian_1-${student}`}
                                                    value={ratings.aspek_penilaian_1[student]}
                                                    onChange={handleRatingChange}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <select data-te-select-init data-te-select-clear-button="true" className='rounded w-full px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-gray-500' id={`aspek_penilaian_2-${student}`}
                                                    name={`aspek_penilaian_2-${student}`}
                                                    value={ratings.aspek_penilaian_2[student]}
                                                    onChange={handleRatingChange}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <select data-te-select-init data-te-select-clear-button="true" className='rounded w-full px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-gray-500' id={`aspek_penilaian_3-${student}`}
                                                    name={`aspek_penilaian_3-${student}`}
                                                    value={ratings.aspek_penilaian_3[student]}
                                                    onChange={handleRatingChange}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <select data-te-select-init data-te-select-clear-button="true" className='rounded w-full px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-gray-500' id={`aspek_penilaian_4-${student}`}
                                                    name={`aspek_penilaian_4-${student}`}
                                                    value={ratings.aspek_penilaian_4[student]}
                                                    onChange={handleRatingChange}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                            <div className='flex justify-end'>
                                <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none mt-3 dark:focus:ring-blue-800'>Simpan</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
};

export default App
