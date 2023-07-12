function FirebaseListener() {
    useEffect(() => {
        historyRef.on('child_added', snapshot => {
            const userId = snapshot.key;
            snapshot.forEach(userHistorySnapshot => {
                const questionData = userHistorySnapshot.val();
                if (questionData['An answer']) {
                    send_answer(userId, questionData['An answer']);
                }
            });
        });
    }, []);

    return (
        <div>
            <p>Firebase Listener Activated!</p>
        </div>
    );
}

export default FirebaseListener;