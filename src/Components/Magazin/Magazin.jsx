export const Magazin = ({status}) => {
    return(
        <ul>
        {status === "default" ? (
            <>
                <li><p>Наличие_в_мага</p></li>
                <li><p>Количество мес </p></li>
                <li><p>Мощность, л.с.</p></li>
                <li><p>Тип двигателя</p></li>
                <li><p>Год выпуска</p></li>
            </>
        ) : (
            <>
                <li><p>Канада</p></li>
                <li><p>3</p></li>
                <li><p>155</p></li>
                <li><p>Бензиновый</p></li>
                <li><p>2018</p></li>
            </>
        )}
    </ul>
    )
}