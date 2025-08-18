import { useEffect, useState } from "react";
import styles from "./BreadCrumbs.module.scss";
import { Crumbs1, Crumbs2 } from "../../assets/icons";
import clsx from "clsx";

export const BreadCrumbs = () => {
    const pages = ["home", "about", "contact"];
    const [currentPage, setCurrentPage] = useState("home");

    const scrollToPage = (page) => {
        document
            .querySelector(`[data-section='${page}']`)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) setCurrentPage(visible.target.dataset.section);
            },
            { threshold: 0.5 }
        );

        pages.forEach((page) => {
            const section = document.querySelector(`[data-section='${page}']`);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.crumbs} aria-label="Page breadcrumbs">
            {pages.map((page) => {
                const active = page === currentPage;
                return (
                    <button
                        key={page}
                        type="button"
                        className={styles.item}
                        onClick={() => scrollToPage(page)}
                        aria-label={`Go to ${page}`}
                    >
                        <img
                            src={active ? Crumbs2 : Crumbs1}
                            alt=""
                            className={clsx(styles.icon, { [styles.active]: active })}
                            draggable={false}
                        />
                    </button>
                );
            })}
        </div>
    );
};

export default BreadCrumbs;
