export function buildVacanciesQuery(params: {
    searchText: string;
    area: string | null;
    page: number;
}) {
    const query = new URLSearchParams();

    const baseText = "Frontend-разработчик";

    const finalText = [baseText, params.searchText].filter(Boolean).join(" ").trim();
    query.set("text", finalText);

    if (params.area) {
        query.set("area", params.area);
    }

    query.set("page", String(params.page));
    query.set("per_page", "10");

    return query.toString();
}