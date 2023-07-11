import Header from './Header'
import Footer from './Footer'

export const FAQ = () => {
    return (
        <div>
            <Header /><br /><br />
            <div className="mx-2 my-3" style={{ minHeight: "500px" }}>
                <ol style={{ fontFamily: "sans-serif" }}>
                    <li>Which countries come under free transportation option?</li>
                    Currently, we provide free transportation of goods from the seller to the buyer within the following countries:
                    <ul>
                        <li>India</li>
                        <li>Sri Lanka</li>
                        <li>Singapore</li>
                        <li>UAE (subject to region)</li>
                        <li>United Kingdom</li>
                    </ul><br />
                    <li>Is intercountry transportation free for the mentioned countries?</li>
                    No, unfortunately, the free transportation option is viable only within the same county.<br /><br />
                    <li>What is the quality of the goods being sold like?</li>
                    We try our level best to ensure the goods being sold are from trusted and verified sellers to ensure the goods being sold are not fake or in bad condition.
                </ol>
            </div>
            <Footer />
        </div>
    );
};
